function includeHTML(){ //ajax
    var z, i, elmnt, file, xhttp; // 변수 선언함

    z = document.getElementsByTagName("*") //문서내에 모든 태그를 가져온다

    for(i=0; i < z.length; i++){ // i는 가지고 있는만큼 반복
        elmnt = z[i]; // 변수 elmnt에 z개별을 대입한다
        file = elmnt.getAttribute("w3-include-html");//모든 요소를 순회하면서 "w3-include-html"속성이 있는지 검사한다
        if (file){ //파일에 속성이 있다면 if(!=null)
        xhttp = new XMLHttpRequest(); //속성이 있다면 AJAX요청을 준비한다.
        xhttp.onreadystatechange = function(){ //요청이 완료되면
        if(this.readyState == 4){//요청이 완료되면
         //성공할때와
        if (this.status == 200){
        elmnt.innerHTML = this.responseText;
        }
        //실패
        if (this.status == 404){
        elmnt.innerHTML = "Page not found"
        }
        elmnt.removeAttribute("w3-include-html");
        includeHTML(); //재귀 호출 : 함수는 호출할때만 실행되는 코드블록이다. 자기 스스로를 호출하는 것.
            }
        }
        xhttp.open("GET", file, true); //비동기 (true) 방식으로 요청을 보냄
        xhttp.send();
        return; //리턴으로 함수 종료하여 현재 요소만 처리
    }
    }
}