import { Component, OnInit,HostListener,ViewChild,ElementRef } from '@angular/core';
declare var Blockly: any; 


@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})
export class BlocklyComponent implements OnInit {

  constructor() { }
  workspace: any;
  programName: any;

  blocklyArea:any;
  blocklyDiv:any;
  width:any;
  
  onresize() :void {
 
  let element = this.blocklyArea;
 console.log(element)
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  this.blocklyDiv.style.width = this.blocklyArea.offsetWidth + 'px';
  this.blocklyDiv.style.height = this.blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(this.workspace);
};

wsize(w:number) :void {
 
  this.blocklyDiv.style.width = w+'px';
  console.log(w)
  Blockly.svgResize(this.workspace);
};

@HostListener('window:resize', ['$event'])
Resize(event:any) {
  this.onresize();
}

  save(): void {
    this.programName = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );
    console.log('saving the program - ', JSON.stringify(this.programName));

    Blockly.JavaScript.addReservedWords('code');
    var code = Blockly.JavaScript.workspaceToCode(this.workspace);
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }

  ngOnInit(): void {

    const tooltex=`<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="controls_if" id="p@0kq@QE{{@Nqq^:.u5l" x="-212" y="-263"></block>
  </xml>`;

    const toolbox =
    `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <label text="As label" style="color:red"></label>
    <block type="update"></block>
    <block type="go"></block>
    <block type="turn"></block>
    <label text="A label" web-class="myLabelStyle"></label>
    <sep gap="8"></sep>
      <block type="controls_if" id="p@0kq@QE{{@Nqq^:.u5l" x="-212" y="-263"></block>
        <block type="controls_if">
          <mutation else="1"></mutation>
        </block>
        <block type="controls_if">
          <mutation elseif="1" else="1"></mutation>
        </block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>

        <label text="A label" web-class="myLabelStyle"></label>
        <sep gap="30"></sep>

      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <field name="VAR">i</field>
        <value name="FROM">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="TO">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
        <value name="BY">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>

      <label text="Another label"></label>
      <sep gap="8"></sep>

      <block type="math_number">
        <field name="NUM">123</field>
      </block>
      <block type="math_arithmetic"></block>
      <block type="math_single"></block>
      <block type="math_trig"></block>
      <block type="math_constant"></block>
      <block type="math_number_property"></block>
      <block type="math_round"></block>
      <block type="math_on_list"></block>
      <block type="math_modulo"></block>
      <block type="math_constrain">
        <value name="LOW">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="HIGH">
          <block type="math_number">
            <field name="NUM">100</field>
          </block>
        </value>
      </block>
      <block type="math_random_int">
        <value name="FROM">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="TO">
          <block type="math_number">
            <field name="NUM">100</field>
          </block>
        </value>
      </block>
      <block type="math_random_float"></block>
      <block type="math_atan2"></block>
      <block type="lists_create_empty"></block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf"></block>
      <block type="lists_getIndex"></block>
      <block type="lists_setIndex"></block> 
  </xml>`;

   this.blocklyArea = document.getElementById('blocklyArea');
   this.blocklyDiv = document.getElementById('blocklyDiv');
 
  this.workspace = Blockly.inject('blocklyDiv',  {toolbox,
  media: '/blockly/media/',
  trashcan: true,
  zoom: {
    controls: true,
    wheel: true,
    scrollbars:true,
    startScale: 0.7,
    maxScale: 1.1,
    minScale: 0.5,
    scaleSpeed: 0.2
  },
  
  renderer : "zelos"
});
this.onresize();
Blockly.svgResize(this.workspace);



  }

}
