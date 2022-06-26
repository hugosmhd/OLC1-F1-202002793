%{
    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Asignacion} = require('../instrucciones/asignar');
    const {If} = require('../instrucciones/if');
    const {Print} = require('../instrucciones/print');
    const {Switch} = require('../instrucciones/switch');
    const {Bloque} = require('../instrucciones/bloque')
    const {BloqueBreak} = require('../instrucciones/bloquebreak')
    const {While} = require('../instrucciones/while')
    const {For} = require('../instrucciones/for')
    const {DoWhile} = require('../instrucciones/dowhile')
    const {Metodo} = require('../instrucciones/metodo')
    const {Funcion} = require('../instrucciones/funcion')
    const {CaseSwitch} = require('../instrucciones/caseswitch')
    const {Break} = require('../instrucciones/break')
    const {Continue} = require('../instrucciones/continue')
    const {Return} = require('../instrucciones/return')
    const {Llamada} = require('../instrucciones/llamada')
    const {Declaracion_array} = require('../instrucciones/array_declaracion')
    const {Asignacion_array} = require('../instrucciones/array_asignacion')
    const {Pop} = require('../instrucciones/pop')
    const {Splice} = require('../instrucciones/splice')

    const {Type} = require('../symbols/type');

    const {Literal} = require('../expresiones/literal')
    const {ArrayValues} = require('../expresiones/arrayValues')
    const {ArrayRetorno} = require('../expresiones/arrayRetorno')
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Identificador} = require('../expresiones/identificador');
    const {Typeof} = require('../expresiones/typeof')
    const {Length} = require('../expresiones/length')
    const {ToCharArray} = require('../expresiones/toCharArray')
    const {IndexOf} = require('../expresiones/indexOf')
    const {Relacional} = require('../expresiones/relacional');
    const {RelacionalOption} = require('../expresiones/relacionalOption');
    const {Logical} = require('../expresiones/logical');
    const {LogicalOption} = require('../expresiones/logicalOptions');
    const {Incremento} = require('../expresiones/incremento');
    const {Push} = require('../expresiones/push');
    const {IncrementOption} = require('../expresiones/incrementOptions');
    const {Decremento} = require('../expresiones/decremento');
    const {DecrementOption} = require('../expresiones/decrementOptions');


    const {Issue} = require('../error/issue');
    const {Singleton} = require('../patron_singleton/singleton');
    var array_erroresLexicos;
    var tipoDeclaracion;
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
"println"			return 'pr_println';
"const"				return 'pr_const';
"if"				return 'pr_if';
"else"				return 'pr_else';
"true"				return 'pr_true';
"false"				return 'pr_false';
"do"                return 'pr_do';
"while"             return 'pr_while';
"switch"            return 'pr_switch'
"case"              return 'pr_case'
"default"           return 'pr_default'
"break"             return 'pr_break'
"continue"          return 'pr_continue'
"void"              return 'pr_void'
"call"              return 'pr_call'
"return"            return 'pr_return'
"typeof"            return 'pr_typeof'
"length"            return 'pr_length'
"toCharArray"       return 'pr_toCharArray'
"indexOf"           return 'pr_indexOf'
"for"               return 'pr_for'
"new"               return 'pr_new'
"push"              return 'pr_push'
"pop"               return 'pr_pop'
"splice"            return 'pr_splice'



","					return 'coma';
"."					return 'punto';
";"					return 'ptcoma';
":"					return 'dospts';
"{"					return 'llabre';
"}"					return 'llcierra';
"("					return 'pabre';
")"					return 'pcierra';
"["					return 'cabre';
"]"					return 'ccierra';


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


\"[^\"]*\"		                { yytext = yytext.substr(1,yyleng-2); return 'cadena'; }
"'"[^']"'"				    { yytext = yytext.substr(1,yyleng-2); return 'caracter'; }
[0-9]+("."[0-9]+)\b  		return 'decimal';
[0-9]+\b					return 'entero';
([a-zA-Z])[a-zA-Z0-9'_']*	    return 'identificador';

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
%left 'mayorque' 'menorque' 'mayorigual' 'menorigual' 'igualigual' 'diferente'
%left 'mas' 'menos'
%left 'por' 'div' 'modulo'
%left 'pot'
%left 'UMENOS' 'UNOT'
%left 'pabre' 'pcierra'

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
	| ASIGNACION ptcoma         { $$=$1; }		
    | IF	                    { $$=$1; }					
    | SWITCH                    { $$=$1; }		
    | FUNCIONES			
    | WHILE					    { $$=$1; }
    | FOR					    { $$=$1; }
    | DOWHILE ptcoma		    { $$=$1; }
    | PRINT ptcoma
    | INCREMENT ptcoma          { $$=$1; }
    | PUSH ptcoma               { $$=$1; }
    | POP ptcoma                { $$=$1; }
    | SPLICE ptcoma             { $$=$1; }
    | DECREMENT ptcoma          { $$=$1; }
    | BLOQUEINSTRUCCIONES       { $$=$1; } 
    | METODOS                   { $$=$1; } 
    | LLAMADA_METODO ptcoma     { $$=$1; } 
    | pr_break ptcoma           { $$= new Break(@1.first_line, @1.first_column); }   
    | pr_continue ptcoma        { $$= new Continue(@1.first_line, @1.first_column); }   
    | RETURN ptcoma             { $$=$1; }      
    | DECLARACIONARRAY ptcoma   { $$=$1; }      
    | ARRAYEXPRES ptcoma        { $$=$1; }      
    | error ptcoma { 
        const singleton = Singleton.getInstance();
        var errors = new Issue("Sintactico", "Error sintactico, verificar entrada", this._$.first_line, this._$.first_column + 1); 
        singleton.add_errores(errors); }
;

ARRAYEXPRES
    : identificador cabre EXPRESION ccierra igual EXPRESION 
    {$$ = new Asignacion_array($1, $3, null, $6, 1, @1.first_line, @1.first_column)}
    | identificador cabre EXPRESION ccierra cabre EXPRESION ccierra igual EXPRESION 
    {$$ = new Asignacion_array($1, $3, $6, $9, 2, @1.first_line, @1.first_column)}
;

DECLARACIONARRAY
    : TIPODATO identificador cabre ccierra igual EXPRESIONES_ARRAY
    {$$ = new Declaracion_array($1, null, $2, 1, $6, null, @1.first_line, @1.first_column)}

    | TIPODATO identificador cabre ccierra cabre ccierra igual EXPRESIONES_ARRAY
    {$$ = new Declaracion_array($1, null, $2, 2, $8, null, @1.first_line, @1.first_column)}
    // | TIPODATO identificador cabre ccierra cabre ccierra igual cabre cabre ARRAY_VALORES ccierra coma cabre ARRAY_VALORES ccierra ccierra
    // {$$ = new Declaracion_array($1, null, $2, 2, $10, $14, @1.first_line, @1.first_column)}
;

ARRAY_VALORES 
    : ARRAY_VALORES coma EXPRESION  { $1.push($3); $$ = $1; }
    | EXPRESION  { $$ = [$1]; }
;    


FOR
    : pr_for pabre INICIALIZACION CONDICION ACTUALIZACION pcierra BLOQUEINSTRUCCIONES
    {$$ = new For($3, $4, $5, $7, @1.first_line, @1.first_column);}
;

INICIALIZACION
    : DECLARACION       {$$ = $1}
    | ASIGNACION        {$$ = $1}
;

CONDICION
    : ptcoma EXPRESION         {$$ = $2}
;

ACTUALIZACION
    : ptcoma INCREMENT          {$$ = $2}
    | ptcoma DECREMENT          {$$ = $2}
    | ptcoma ASIGNACION         {$$ = $2}
;    

RETURN
    : pr_return EXPRESION   { $$= new Return($2, @1.first_line, @1.first_column); }
    | pr_return             { $$= new Return(null, @1.first_line, @1.first_column); }
;

LLAMADA_METODO: 'pr_call' 'identificador' 'pabre' LISTA_PASO_PARAMETROS 'pcierra' {$$= new Llamada($2,$4,@1.first_line, @1.first_column )}
;

LISTA_PASO_PARAMETROS
    : LISTA_PASO_PARAMETROS coma EXPRESION      {$1.push($3); $$ = $1}
    | EXPRESION     {$$ = [$1]}
    | {$$ = []}
;

DECLARACION
    : 'pr_const' TIPODATO IDS igual EXPRESION
    {$$= new Declaracion($3,$2,$5,false,@1.first_line, @1.first_column);}
    | TIPODATO IDS 'igual' EXPRESION
    {$$= new Declaracion($2,$1,$4,true,@1.first_line, @1.first_column);}
;

FUNCIONES: TIPODATO  'identificador' 'pabre' LISTA_PARAMETROS 'pcierra' BLOQUE {$$= new Funcion($1,$2,$4,$6,@1.first_line, @1.first_column );} 
;

IDS
    : IDS coma identificador         {$1.push($3); $$ = $1}
    | identificador                     {$$ = [$1]}
;

ASIGNACION
    : identificador igual EXPRESION     {$$ = new Asignacion($1, $3, @1.first_line, @1.first_column)} 	
;

METODOS:  'pr_void' 'identificador' 'pabre' LISTA_PARAMETROS 'pcierra' BLOQUE {$$= new Metodo(null, $2,$4,$6,@1.first_line, @1.first_column );} 
;

LISTA_PARAMETROS
    : LISTA_PARAMETROS coma TIPODATO 'identificador'    {$1.push({'tipo': $3, 'id': $4}); $$ = $1}
    | TIPODATO 'identificador'          {$$ = [{'tipo': $1, 'id': $2}]}
    | {$$ = []}
;

IF
    : pr_if pabre EXPRESION pcierra IF_INSTRUCCIONES    {$$ = new If($3, $5, @1.first_line, @1.first_column); }
    | pr_if pabre EXPRESION pcierra IF_INSTRUCCIONES pr_else IF_INSTRUCCIONES     { $$ = new If($3, $5, @1.first_line, @1.first_column, $7); }    
    | pr_if pabre EXPRESION pcierra IF_INSTRUCCIONES pr_else IF      { $$ = new If($3, $5, @1.first_line, @1.first_column, $7); }
;

IF_INSTRUCCIONES
    : DECLARACION ptcoma        { $$=$1; }
	| ASIGNACION ptcoma         { $$=$1; }		
    | PRINT ptcoma
    | INCREMENT ptcoma          { $$=$1; }
    | DECREMENT ptcoma          { $$=$1; }
    | BLOQUEINSTRUCCIONES       { $$=$1; } 
    | LLAMADA_METODO ptcoma     { $$=$1; } 
    | pr_break ptcoma           { $$= new Break(@1.first_line, @1.first_column); } 
    | pr_continue ptcoma        { $$= new Continue(@1.first_line, @1.first_column); } 
    | RETURN ptcoma             { $$=$1; }      
    | error ptcoma { 
        const singleton = Singleton.getInstance();
        var errors = new Issue("Sintactico", "Error sintactico, verificar entrada", this._$.first_line, this._$.first_column + 1); 
        singleton.add_errores(errors); }
;

SWITCH
    : pr_switch pabre EXPRESION pcierra llabre LISTACASE llcierra  {$$ = new Switch($3, $6, @1.first_line, @1.first_column); }
;

LISTACASE
    : LISTACASE CASEBLOQUE      {$1.push($2);$$ = $1}
    | CASEBLOQUE                {$$ = [$1]}
;

CASEBLOQUE
    : pr_case EXPRESION dospts INSTRUCCIONES    {$$ = new CaseSwitch("case", $2, $4, @1.first_line, @1.first_column)}
    | pr_default dospts INSTRUCCIONES           {$$ = new CaseSwitch("default", null, $3, @1.first_line, @1.first_column)}
;



PRINT
    : pr_print pabre EXP_PRINT pcierra      {$$ = new Print(false, $3, @1.first_line, @1.first_column);}	
    | pr_println pabre EXP_PRINT pcierra      {$$ = new Print(true, $3, @1.first_line, @1.first_column);}			
;

EXP_PRINT
    : EXPRESION     {$$ = $1}
    |
;

WHILE
    : pr_while pabre EXPRESION pcierra BLOQUEINSTRUCCIONES  {$$ = new While($3, $5);}
;

DOWHILE
    : pr_do BLOQUEINSTRUCCIONES pr_while pabre EXPRESION pcierra   {$$ = new DoWhile($5, $2);}
;

TIPODATO
    : pr_int 	        {$$=Type.INT;} 
    | pr_double 	    {$$=Type.DOUBLE;} 
    | pr_boolean 	    {$$=Type.BOOLEAN;} 
    | pr_char 	        {$$=Type.CHAR;} 
    | pr_string 	    {$$=Type.STRING;} 
;

BLOQUEINSTRUCCIONES
    : llabre INSTRUCCIONES llcierra { $$= new Bloque($2,@1.first_line, @1.first_column) }
    | llabre llcierra   { $$= new Bloque(null,@1.first_line, @1.first_column) }
;


BLOQUE
    : llabre INSTRUCCIONES llcierra { $$= new Bloque($2,@1.first_line, @1.first_column) }
    | llabre llcierra       { $$= new Bloque(null,@1.first_line, @1.first_column) }
;

INCREMENT
    : masmas identificador      {$$ = new Incremento($2, IncrementOption.MASMAS_PRE, @1.first_line, @1.first_column);}             
    | identificador masmas      {$$ = new Incremento($1, IncrementOption.MASMAS_POST, @1.first_line, @1.first_column);}             
;

PUSH
    : identificador punto pr_push pabre EXPRESION pcierra   { $$ = new Push($1, $5, @1.first_line, @1.first_column); }
;

POP
    : identificador punto pr_pop pabre pcierra   { $$ = new Pop($1, @1.first_line, @1.first_column); }
;

SPLICE
    : identificador punto pr_splice pabre EXPRESION coma EXPRESION pcierra   { $$ = new Splice($1, $5, $7, @1.first_line, @1.first_column); }
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
    | PUSH                              {$$ = $1}
    | DECREMENT                         {$$ = $1}
    | pabre EXPRESION pcierra           {$$ = $2} 
    | identificador pabre LISTA_PASO_PARAMETROS pcierra     {$$= new Llamada($1,$3,@1.first_line, @1.first_column )}
    | pr_typeof pabre EXPRESION pcierra                    { $$= new Typeof($3, @1.first_line, @1.first_column); } 
    | pr_length pabre EXPRESION pcierra                    { $$= new Length($3, @1.first_line, @1.first_column); } 
    | pr_toCharArray pabre EXPRESION pcierra               { $$= new ToCharArray($3, @1.first_line, @1.first_column); } 
    | identificador punto pr_indexOf pabre EXPRESION pcierra    { $$= new IndexOf($1, $5, @1.first_line, @1.first_column); } 
    | pr_new TIPODATO cabre EXPRESION ccierra cabre EXPRESION ccierra   { $$ = new ArrayValues($2, $4, $7, 2, @1.first_line, @1.first_column); }
    | identificador cabre  EXPRESION ccierra           { $$= new ArrayRetorno($1, $3, null, 1, @1.first_line, @1.first_column); }
    | identificador cabre  EXPRESION ccierra cabre  EXPRESION ccierra   { $$= new ArrayRetorno($1, $3, $6, 2, @1.first_line, @1.first_column); }
;

EXPRESIONES_ARRAY
    : pr_new TIPODATO cabre EXPRESION ccierra cabre EXPRESION ccierra     { $$ = new ArrayValues($2, $4, $7, 2, @1.first_line, @1.first_column); }
    | pr_new TIPODATO cabre EXPRESION ccierra       { $$ = new ArrayValues($2, $4, null, 1, @1.first_line, @1.first_column); }
    | cabre ARRAY_VALORES ccierra                   { $$ = new ArrayValues(null, $2, null, 1, @1.first_line, @1.first_column); }
    | cabre cabre ARRAY_VALORES ccierra coma cabre ARRAY_VALORES ccierra ccierra    { $$ = new ArrayValues(null, $3, $7, 2, @1.first_line, @1.first_column); }    
;