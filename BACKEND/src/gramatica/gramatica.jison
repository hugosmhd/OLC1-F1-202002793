
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
"if"				return 'pr_if';
"else"				return 'pr_else';
"true"				return 'pr_true';
"false"				return 'pr_false';
"while"             return 'pr_while';



";"					return 'ptcoma';
"{"					return 'llabre';
"}"					return 'llcierra';
"("					return 'pabre';
")"					return 'pcierra';


"+"					return 'mas';
"-"					return 'menos';
"*"					return 'por';
"/"					return 'div';

"&&"				return 'and';
"||"				return 'or';
"<="				return 'menorigual';
"<"					return 'menorque';
">="				return 'mayorigual';
">"					return 'mayorque';
"=="				return 'igualigual';
"="					return 'igual';
"!="				return 'diferente';
"!"					return 'not';

\"[^\"]*\"	             { return 'cadena'; }
"'"[^']"'"				 { return 'caracter'; }
[0-9]+("."[0-9]+)\b  											return 'decimal';
[0-9]+\b														return 'entero';
([a-zA-Z])[a-zA-Z0-9_]*	                                        return 'identificador';

<<EOF>>				return 'EOF';

.					{ 
                        console.log('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                        
                    }

/lex

%left 'or'
%left 'and'
%left 'igualigual' 'diferente'
%left 'mayorque' 'menorque' 'menorigual' 'mayorigual'
%left 'mas' 'menos'
%left 'por' 'div'
%right 'UMENOS' 'UNOT'

%start INIT

%%

INIT
	: INSTRUCCIONES EOF
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION 	
	| INSTRUCCION					
;

INSTRUCCION
	: DECLARACION ptcoma		
	| ASIGNACION ptcoma		
    | IF						
    | WHILE					
    | PRINT ptcoma
;

DECLARACION
    : TIPO identificador igual EXPRESION 	    
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

TIPO
    : pr_int 	
    | pr_double 	
    | pr_boolean 	
    | pr_char 	
    | pr_string 	
;

BLOQUEINSTRUCCIONES
    : llabre INSTRUCCIONES llcierra
    | 
;

EXPRESION
	: EXPRESION mas EXPRESION               
    | EXPRESION menos EXPRESION             
    | EXPRESION por EXPRESION               
    | EXPRESION div EXPRESION               
    | menos EXPRESION %prec UMENOS	        
    | entero                                
    | decimal                               
    | caracter                              
    | cadena                                
    | pr_true                                 
    | pr_false                                
    | identificador                         
    | EXPRESION igualigual EXPRESION        
    | EXPRESION diferente EXPRESION         
    | EXPRESION menorque EXPRESION          
    | EXPRESION mayorque EXPRESION          
    | EXPRESION menorigual EXPRESION       
    | EXPRESION mayorigual EXPRESION       
    | EXPRESION and EXPRESION               
    | EXPRESION or EXPRESION                
    | not EXPRESION %prec UNOT              
    | pabre EXPRESION pcierra 
;   