import { Component, OnInit } from '@angular/core';
declare var unityInstance: any;
@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {

  constructor() { 
    


}

  ngOnInit(): void {
    (window as any).createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "https://localhost:5001/unitybuild/2/Build/New folder.data.unityweb",
      frameworkUrl: "https://localhost:5001/unitybuild/2/Build/New folder.framework.js.unityweb",
      codeUrl: "https://localhost:5001/unitybuild/2/Build/New folder.wasm.unityweb",
      symbolsUrl: "https://localhost:5001/unitybuild/2/Build/New folder.symbols.json.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Unity Angular",
      productVersion: "0.1",
    }).then((instance: any) => {
      unityInstance = instance;
    })
  }

}
