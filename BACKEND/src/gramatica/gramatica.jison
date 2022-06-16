%{

    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {If} = require('../instrucciones/if');
    const {Print} = require('../instrucciones/print');
    const {Switch} = require('../instrucciones/switch');
    const {Bloque} = require('../instrucciones/bloque')

    const {Literal} = require('../expresiones/literal')
    const {Type} = require('../symbols/type');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Identificador} = require('../expresiones/identificador');
    const {Relacional} = require('../expresiones/relacional');
    const {RelacionalOption} = require('../expresiones/relacionalOption');
    const {Logical} = require('../expresiones/logical');
    const {LogicalOption} = require('../expresiones/logicalOptions');
    const {Incremento} = require('../expresiones/incremento');
    const {IncrementOption} = require('../expresiones/incrementOptions');
    const {Decremento} = require('../expresiones/decremento');
    const {DecrementOption} = require('../expresiones/decrementOptions');

    const {Issue} = require('../error/issue');
    const {Singleton} = require('../patron_singleton/singleton');



    var array_erroresLexicos;

%}

%lex

%options case-insensitive

%%
\s+											// se ignoran espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

"int"			    return 'pr_int';
"double"			return 'pr_double';
"char"				return 'pr_char';
"boolean"			return 'pr_boolean';
"string"			return 'pr_string';
"print"				return 'pr_print';
"const"				return 'pr_const';
"if"				return 'pr_if';
"else"				return 'pr_else';
"true"				return 'pr_true';
"false"				return 'pr_false';
"while"             return 'pr_while';
"switch"            return 'pr_switch'
"case"              return 'pr_case'
"default"           return 'pr_default'
"break"             return 'pr_break'



","					return 'coma';
";"					return 'ptcoma';
":"					return 'dospts';
"{"					return 'llabre';
"}"					return 'llcierra';
"("					return 'pabre';
")"					return 'pcierra';


"**"				return 'pot';
"%"				    return 'modulo';
"++"				return 'masmas';
"+"					return 'mas';
"--"				return 'menosmenos';
"-"					return 'menos';
"*"					return 'por';
"/"					return 'div';

"&&"				return 'and';
"||"				return 'or';
"^"				    return 'xor';
"<="				return 'menorigual';
"<"					return 'menorque';
">="				return 'mayorigual';
">"					return 'mayorque';
"=="				return 'igualigual';
"="					return 'igual';
"!="				return 'diferente';
"!"					return 'not';

\"[^\"]*\"	                { yytext = yytext.substr(1,yyleng-2); return 'cadena'; }
"'"[^']"'"				    { yytext = yytext.substr(1,yyleng-2); return 'caracter'; }
[0-9]+("."[0-9]+)\b  		return 'decimal';
[0-9]+\b					return 'entero';
([a-zA-Z])[a-zA-Z0-9_]*	    return 'identificador';

<<EOF>>				return 'EOF';

.					{ 
                        // console.log('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                        const singleton = Singleton.getInstance();
                        const error = new Issue("Lexico", "Caracter que lo proboco: " + yytext, yylloc.first_line, yylloc.first_column + 1); 
                        singleton.add_errores(error);
                        
                    }

/lex

%left 'or'
%left 'and'
%left 'xor'
%left 'igualigual' 'diferente'
%left 'mayorque' 'menorque' 'menorigual' 'mayorigual'
%left 'mas' 'menos'
%left 'por' 'div' 'modulo'
%left 'pot'
%left 'UMENOS' 'UNOT'

%start INIT

%%

INIT
	: INSTRUCCIONES EOF     
    {
        return $1;        
    }
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION         { $1.push($2); $$=$1;}	
	| INSTRUCCION	                    { $$ = [$1] }				
;

INSTRUCCION
	: DECLARACION ptcoma        { $$=$1; }
	| ASIGNACION ptcoma		
    | IF	                    { $$=$1; }					
    | SWITCH	                    { $$=$1; }					
    | WHILE					
    | PRINT ptcoma
    | INCREMENT ptcoma          { $$=$1; }
    | DECREMENT ptcoma          { $$=$1; }
    | BLOQUE                    { $$=$1; } 
    | error ptcoma { 
        const singleton = Singleton.getInstance();
        var errors = new Issue("Sintactico", "Error sintactico, verificar entrada", this._$.first_line, this._$.first_column + 1); 
        singleton.add_errores(errors); }
;

DECLARACION
    : TIPO_DECLARACION TIPODATO IDS igual EXPRESION
    {$$= new Declaracion($3,$2,$5,@1.first_line, @1.first_column);}
;

IDS
    : IDS coma identificador         {$1.push($3);}
    | identificador                     {$$ = [$1]}
;

ASIGNACION
    : identificador igual EXPRESION 	
;

IF
    : pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES     {$$ = new If($3, $5, @1.first_line, @1.first_column); }
    | pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES pr_else BLOQUEINSTRUCCIONES     { $$ = new If($3, $5, @1.first_line, @1.first_column, $7); }    
    | pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES pr_else IF      { $$ = new If($3, $5, @1.first_line, @1.first_column, $7); }
;

SWITCH
    : pr_switch // pabre EXPRESION pcierra llabre CASEBLOQUE llcierra  {$$ = new Switch($3, $5, @1.first_line, @1.first_column); }
;

CASEBLOQUE
    : CASEBLOQUE CASOSSWITCH dospts SWITCHINSTRUCCIONES
    | 
;

CASOSSWITCH
    : pr_case EXPRESION
    | pr_default
;


SWITCHINSTRUCCIONES
    : INSTRUCCIONES BREAKOPTION
;

BREAKOPTION
    : pr_break ptcoma
    | 
;

PRINT
    : pr_print pabre EXPRESION pcierra      {$$ = new Print($3, @1.first_line, @1.first_column);}			
;

WHILE
    : pr_while pabre EXPRESION pcierra BLOQUEINSTRUCCIONES 
;

TIPO_DECLARACION: 'pr_const' | ;

TIPODATO
    : pr_int 	        {$$=Type.INT;} 
    | pr_double 	    {$$=Type.DOUBLE;} 
    | pr_boolean 	    {$$=Type.BOOLEAN;} 
    | pr_char 	        {$$=Type.CHAR;} 
    | pr_string 	    {$$=Type.STRING;} 
;

BLOQUEINSTRUCCIONES
    : llabre INSTRUCCIONES llcierra { $$ = $2; }
    | llabre llcierra
;

BLOQUE
: llabre INSTRUCCIONES llcierra { $$= new Bloque($2,@1.first_line, @1.first_column) }
    | llabre llcierra
;

INCREMENT
    : masmas identificador      {$$ = new Incremento($2, IncrementOption.MASMAS_PRE, @1.first_line, @1.first_column);}             
    | identificador masmas      {$$ = new Incremento($1, IncrementOption.MASMAS_POST, @1.first_line, @1.first_column);}             
;

DECREMENT
    : menosmenos identificador      {$$ = new Decremento($2, DecrementOption.MENOSMENOS_PRE, @1.first_line, @1.first_column);}             
    | identificador menosmenos      {$$ = new Decremento($1, DecrementOption.MENOSMENOS_POST, @1.first_line, @1.first_column);}             
;

EXPRESION
	: EXPRESION mas EXPRESION       {$$= new Arithmetic($1,$3,ArithmeticOption.MAS, @1.first_line, @1.first_column);}         
    | EXPRESION menos EXPRESION     {$$= new Arithmetic($1,$3,ArithmeticOption.MENOS, @1.first_line, @1.first_column);}      
    | EXPRESION por EXPRESION       {$$= new Arithmetic($1,$3,ArithmeticOption.POR, @1.first_line, @1.first_column);}
    | EXPRESION div EXPRESION       {$$= new Arithmetic($1,$3,ArithmeticOption.DIV, @1.first_line, @1.first_column);}        
    | EXPRESION pot EXPRESION       {$$= new Arithmetic($1,$3,ArithmeticOption.POT, @1.first_line, @1.first_column);}
    | EXPRESION modulo EXPRESION       {$$= new Arithmetic($1,$3,ArithmeticOption.MODULO, @1.first_line, @1.first_column);}
    | menos EXPRESION %prec UMENOS	{$$= new Arithmetic($2,null,ArithmeticOption.MENOSUNARIO, @1.first_line, @1.first_column);}      
    | entero                {$$=new Literal($1,Type.INT , @1.first_line, @1.first_column)}                      
    | decimal               {$$=new Literal($1,Type.DOUBLE , @1.first_line, @1.first_column)}                           
    | caracter              {$$=new Literal($1,Type.CHAR , @1.first_line, @1.first_column)}              
    | cadena                {$$=new Literal($1,Type.STRING , @1.first_line, @1.first_column)}                
    | pr_true               {$$=new Literal($1,Type.BOOLEAN , @1.first_line, @1.first_column)}                 
    | pr_false              {$$=new Literal($1,Type.BOOLEAN , @1.first_line, @1.first_column)}                  
    | identificador         {$$ = new Identificador($1, @1.first_line, @1.first_column);}               
    | EXPRESION igualigual EXPRESION    {$$ = new Relacional($1, $3, RelacionalOption.IGUALIGUAL, @1.first_line, @1.first_column);}                
    | EXPRESION diferente EXPRESION     {$$ = new Relacional($1, $3, RelacionalOption.DIFERENTE, @1.first_line, @1.first_column);}              
    | EXPRESION menorque EXPRESION      {$$ = new Relacional($1, $3, RelacionalOption.MENOR, @1.first_line, @1.first_column);}          
    | EXPRESION mayorque EXPRESION      {$$ = new Relacional($1, $3, RelacionalOption.MAYOR, @1.first_line, @1.first_column);}          
    | EXPRESION menorigual EXPRESION    {$$ = new Relacional($1, $3, RelacionalOption.MENORIGUAL, @1.first_line, @1.first_column);}       
    | EXPRESION mayorigual EXPRESION    {$$ = new Relacional($1, $3, RelacionalOption.MAYORIGUAL, @1.first_line, @1.first_column);}       
    | EXPRESION and EXPRESION           {$$ = new Logical($1, $3, LogicalOption.AND, @1.first_line, @1.first_column);}                              
    | EXPRESION or EXPRESION            {$$ = new Logical($1, $3, LogicalOption.OR, @1.first_line, @1.first_column);}    
    | EXPRESION xor EXPRESION           {$$ = new Logical($1, $3, LogicalOption.XOR, @1.first_line, @1.first_column);}    
    | not EXPRESION %prec UNOT          {$$ = new Logical($2, null, LogicalOption.NOT, @1.first_line, @1.first_column);}             
    | INCREMENT                         {$$ = $1}
    | DECREMENT                         {$$ = $1}
    | pabre EXPRESION pcierra 
;   