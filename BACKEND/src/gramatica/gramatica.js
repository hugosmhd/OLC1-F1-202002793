/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[27,28,29,30,31],$V1=[2,17],$V2=[1,10],$V3=[1,11],$V4=[1,13],$V5=[1,12],$V6=[1,14],$V7=[5,15,18,24,25,26,27,28,29,30,31,33],$V8=[1,39],$V9=[1,41],$Va=[1,32],$Vb=[1,33],$Vc=[1,34],$Vd=[1,35],$Ve=[1,36],$Vf=[1,37],$Vg=[1,38],$Vh=[1,40],$Vi=[1,46],$Vj=[1,47],$Vk=[1,48],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[8,20,34,35,36,37,44,45,46,47,48,49,50,51],$Vv=[5,15,18,22,24,25,26,27,28,29,30,31,33],$Vw=[2,24],$Vx=[1,79],$Vy=[8,20,34,35,44,45,46,47,48,49,50,51],$Vz=[8,20,44,45,50,51],$VA=[8,20,44,45,46,47,48,49,50,51];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"ptcoma":8,"ASIGNACION":9,"IF":10,"WHILE":11,"PRINT":12,"TIPO_DECLARACION":13,"TIPODATO":14,"identificador":15,"igual":16,"EXPRESION":17,"pr_if":18,"pabre":19,"pcierra":20,"BLOQUEINSTRUCCIONES":21,"pr_else":22,"DEFIF":23,"pr_print":24,"pr_while":25,"pr_const":26,"pr_int":27,"pr_double":28,"pr_boolean":29,"pr_char":30,"pr_string":31,"llabre":32,"llcierra":33,"mas":34,"menos":35,"por":36,"div":37,"entero":38,"decimal":39,"caracter":40,"cadena":41,"pr_true":42,"pr_false":43,"igualigual":44,"diferente":45,"menorque":46,"mayorque":47,"menorigual":48,"mayorigual":49,"and":50,"or":51,"not":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"ptcoma",15:"identificador",16:"igual",18:"pr_if",19:"pabre",20:"pcierra",22:"pr_else",23:"DEFIF",24:"pr_print",25:"pr_while",26:"pr_const",27:"pr_int",28:"pr_double",29:"pr_boolean",30:"pr_char",31:"pr_string",32:"llabre",33:"llcierra",34:"mas",35:"menos",36:"por",37:"div",38:"entero",39:"decimal",40:"caracter",41:"cadena",42:"pr_true",43:"pr_false",44:"igualigual",45:"diferente",46:"menorque",47:"mayorque",48:"menorigual",49:"mayorigual",50:"and",51:"or",52:"not"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[6,2],[7,5],[9,3],[10,5],[10,7],[10,7],[12,4],[11,5],[13,1],[13,0],[14,1],[14,1],[14,1],[14,1],[14,1],[21,3],[21,0],[17,3],[17,3],[17,3],[17,3],[17,2],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,2],[17,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return $$[$0-1];        
    
break;
case 2:
 $$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3:
 this.$ = [$$[$0]] 
break;
case 4:
 this.$=$$[$0-1];
break;
case 9:

        this.$= new Declaracion($$[$0-2],$$[$0-3],$$[$0],_$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 18: case 19: case 20: case 21: case 22:
this.$=$$[$0];
break;
case 25:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MAS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 26:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MENOS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 27:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 28:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 30:
this.$=new Literal($$[$0],Type.INT , _$[$0].first_line, _$[$0].first_column)
break;
case 31:
this.$=new Literal($$[$0],Type.DOUBLE , _$[$0].first_line, _$[$0].first_column)
break;
case 32:
this.$=new Literal($$[$0],Type.CHAR , _$[$0].first_line, _$[$0].first_column)
break;
case 33:
this.$=new Literal($$[$0],Type.STRING , _$[$0].first_line, _$[$0].first_column)
break;
case 34: case 35:
this.$=new Literal($$[$0],Type.BOOLEAN , _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [o($V0,$V1,{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,15:$V2,18:$V3,24:$V4,25:$V5,26:$V6}),{1:[3]},o($V0,$V1,{7:4,9:5,10:6,11:7,12:8,13:9,6:16,5:[1,15],15:$V2,18:$V3,24:$V4,25:$V5,26:$V6}),o($V7,[2,3]),{8:[1,17]},{8:[1,18]},o($V7,[2,6]),o($V7,[2,7]),{8:[1,19]},{14:20,27:[1,21],28:[1,22],29:[1,23],30:[1,24],31:[1,25]},{16:[1,26]},{19:[1,27]},{19:[1,28]},{19:[1,29]},o($V0,[2,16]),{1:[2,1]},o($V7,[2,2]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,8]),{15:[1,30]},{15:[2,18]},{15:[2,19]},{15:[2,20]},{15:[2,21]},{15:[2,22]},{15:$V8,17:31,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:42,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:43,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:44,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{16:[1,45]},{8:[2,10],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},{15:$V8,17:58,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},o($Vu,[2,30]),o($Vu,[2,31]),o($Vu,[2,32]),o($Vu,[2,33]),o($Vu,[2,34]),o($Vu,[2,35]),o($Vu,[2,36]),{15:$V8,17:59,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:60,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{20:[1,61],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},{20:[1,62],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},{20:[1,63],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},{15:$V8,17:64,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:65,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:66,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:67,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:68,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:69,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:70,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:71,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:72,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:73,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:74,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:75,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},{15:$V8,17:76,19:$V9,35:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,43:$Vg,52:$Vh},o($Vu,[2,29]),o($Vu,[2,45]),{20:[1,77],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},o($Vv,$Vw,{21:78,32:$Vx}),o($V7,$Vw,{21:80,32:$Vx}),{8:[2,14]},{8:[2,9],34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt},o($Vy,[2,25],{36:$Vk,37:$Vl}),o($Vy,[2,26],{36:$Vk,37:$Vl}),o($Vu,[2,27]),o($Vu,[2,28]),o($Vz,[2,37],{34:$Vi,35:$Vj,36:$Vk,37:$Vl,46:$Vo,47:$Vp,48:$Vq,49:$Vr}),o($Vz,[2,38],{34:$Vi,35:$Vj,36:$Vk,37:$Vl,46:$Vo,47:$Vp,48:$Vq,49:$Vr}),o($VA,[2,39],{34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o($VA,[2,40],{34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o($VA,[2,41],{34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o($VA,[2,42],{34:$Vi,35:$Vj,36:$Vk,37:$Vl}),o([8,20,50,51],[2,43],{34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr}),o([8,20,51],[2,44],{34:$Vi,35:$Vj,36:$Vk,37:$Vl,44:$Vm,45:$Vn,46:$Vo,47:$Vp,48:$Vq,49:$Vr,50:$Vs}),o($Vu,[2,46]),o($V7,[2,11],{22:[1,81]}),o($V0,$V1,{6:3,7:4,9:5,10:6,11:7,12:8,13:9,4:82,15:$V2,18:$V3,24:$V4,25:$V5,26:$V6}),o($V7,[2,15]),o($V7,$Vw,{21:83,23:[1,84],32:$Vx}),o($V0,$V1,{7:4,9:5,10:6,11:7,12:8,13:9,6:16,15:$V2,18:$V3,24:$V4,25:$V5,26:$V6,33:[1,85]}),o($V7,[2,12]),o($V7,[2,13]),o($Vv,[2,23])],
defaultActions: {15:[2,1],21:[2,18],22:[2,19],23:[2,20],24:[2,21],25:[2,22],63:[2,14]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Literal} = require('../expresiones/literal')
    const {Type} = require('../symbols/type');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');

    var array_erroresLexicos;

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran espacios en blanco
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 27;
break;
case 4:return 28;
break;
case 5:return 30;
break;
case 6:return 29;
break;
case 7:return 31;
break;
case 8:return 24;
break;
case 9:return 26;
break;
case 10:return 18;
break;
case 11:return 22;
break;
case 12:return 42;
break;
case 13:return 43;
break;
case 14:return 25;
break;
case 15:return 8;
break;
case 16:return 32;
break;
case 17:return 33;
break;
case 18:return 19;
break;
case 19:return 20;
break;
case 20:return 34;
break;
case 21:return 35;
break;
case 22:return 36;
break;
case 23:return 37;
break;
case 24:return 50;
break;
case 25:return 51;
break;
case 26:return 48;
break;
case 27:return 46;
break;
case 28:return 49;
break;
case 29:return 47;
break;
case 30:return 44;
break;
case 31:return 16;
break;
case 32:return 45;
break;
case 33:return 52;
break;
case 34: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 41; 
break;
case 35: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 40; 
break;
case 36:return 39;
break;
case 37:return 38;
break;
case 38:return 15;
break;
case 39:return 5;
break;
case 40: 
                        console.log('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                        
                    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:string\b)/i,/^(?:print\b)/i,/^(?:const\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:while\b)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:==)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:"[^\"]*")/i,/^(?:'[^']')/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}