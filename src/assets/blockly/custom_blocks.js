
var unityInstance;

Blockly.defineBlocksWithJsonArray([ 
  {
    type: "update",
    message0: "Update  %1",
    args0: [
      {type: "input_statement", name: "DO"}
    ],      
    previousStatement: null,
    nextStatement: null,
    colour: 120
  },
  {
    type: "go",
    message0: "Go %1",
    args0: [
      {type: "field_number", name: "speed", check: "Number"}
    ],    
    previousStatement: 'any',
    nextStatement: 'any',
    colour: 120
  },
  {
    type: "turn",
    message0: "Turn %1",
    args0: [
      {type: "field_number", name: "angle", check: "Number"}
    ],    
    previousStatement: 'any',
    nextStatement: 'any',
    colour: 120
  },
  
]);


Blockly.JavaScript['update'] = function(block) {   
  var text = Blockly.JavaScript.statementToCode(block, 'DO')
  var code = 'Update = function Update(){\n '+text+' }\n';
  return code;
};

Blockly.JavaScript['go'] = function(block) { 
  var value = block.getFieldValue('speed')
  var code = 'forward('+value+');\n';
  return code;
};

Blockly.JavaScript['turn'] = function(block) {   
  var value = block.getFieldValue('angle') 
  var code = 'turn('+value+');\n';
  return code;
};

let Update =()=>{
 
}

const forward =(arg)=>{
  unityInstance.SendMessage('carRoot', 'Forward',arg);
}

const turn =(arg)=>{
  unityInstance.SendMessage('carRoot', 'Turn',arg);
}