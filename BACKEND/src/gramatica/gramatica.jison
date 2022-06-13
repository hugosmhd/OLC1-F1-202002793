%{

    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Literal} = require('../expresiones/literal')
    const {Type} = require('../symbols/type');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Identificador} = require('../expresiones/identificador');
    const {Relacional} = require('../expresiones/relacional');
    const {RelacionalOption} = require('../expresiones/relacionalOption');
    const {Logical} = require('../expresiones/logical');
    const {LogicalOption} = require('../expresiones/logicalOptions');

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



","					return 'coma';
";"					return 'ptcoma';
"{"					return 'llabre';
"}"					return 'llcierra';
"("					return 'pabre';
")"					return 'pcierra';


"**"				return 'pot';
"%"				    return 'modulo';
"+"					return 'mas';
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
                        console.log('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                        
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
	: DECLARACION ptcoma        { $$=$1;}
	| ASIGNACION ptcoma		
    | IF						
    | WHILE					
    | PRINT ptcoma
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
    : pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES							
    | pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES pr_else BLOQUEINSTRUCCIONES	
    | pr_if pabre EXPRESION pcierra BLOQUEINSTRUCCIONES pr_else DEFIF				
;

PRINT
    : pr_print pabre EXPRESION pcierra 				
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
    : llabre INSTRUCCIONES llcierra
    | 
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
    | EXPRESION xor EXPRESION            {$$ = new Logical($1, $3, LogicalOption.XOR, @1.first_line, @1.first_column);}    
    | not EXPRESION %prec UNOT          {$$ = new Logical($2, null, LogicalOption.NOT, @1.first_line, @1.first_column);}             
    | pabre EXPRESION pcierra 
;   