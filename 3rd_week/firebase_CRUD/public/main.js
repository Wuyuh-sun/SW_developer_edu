import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc, 
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8pbkQUK4vE_qFsn7xk0juTqYJxTa_FMk",
  authDomain: "study8253.firebaseapp.com",
  projectId: "study8253",
  storageBucket: "study8253.appspot.com",
  messagingSenderId: "240142884948",
  appId: "1:240142884948:web:3cff79c4e81bc888f60dc1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//내비 이벤트
let inputDP = $("#item_inputDP");
let readDP = $("#item_readDP");
$(document).ready(() => {
  inputDP.hide();
  readDP.show();
  $("#item_input").on("click", (e) => {
    inputDP.show();
    readDP.hide();
  });
  $("#item_read").on("click", (e) => {
    inputDP.hide();
    readDP.show();
  });
});

//이미지 선택
let DataImg = {
  BOARD_img: "",
  CPU_img: "",
  GPU_img: "",
  RAM_img: "",
  SSD_img: "",
  HDD_img: "",
  POWER_img: "",
  COOLER_img: "",
};
function dataImgPush(
  BOARD_img,
  CPU_img,
  GPU_img,
  RAM_img,
  SSD_img,
  HDD_img,
  POWER_img,
  COOLER_img
) {
  DataImg = {
    BOARD_img: `./img/${BOARD_img}.png`,
    CPU_img: `./img/${CPU_img}.png`,
    GPU_img: `./img/${GPU_img}.png`,
    RAM_img: `./img/${RAM_img}.png`,
    SSD_img: `./img/${SSD_img}.png`,
    HDD_img: `./img/${HDD_img}.png`,
    POWER_img: `./img/${POWER_img}.png`,
    COOLER_img: `./img/${COOLER_img}.png`,
  };
  console.log(DataImg);
}

//폼 데이터 받기
let i = 0;
let serializeObject = "";
$.fn.serializeObject = function () {
  "use strict";
  var result = {};
  var extend = function (i, element) {
    var node = result[element.name];
    if ("undefined" !== typeof node && node !== null) {
      if ($.isArray(node)) {
        node.push(element.value);
      } else {
        result[element.name] = [node, element.value];
      }
    } else {
      result[element.name] = element.value;
    }
  };
  $.each(this.serializeArray(), extend);
  return result;
};
$("#formSubmit").on("click", async (e) => {
  e.preventDefault();
  serializeObject = $("#item_inputForm").serializeObject();
  console.log(serializeObject);
  dataImgPush(
    serializeObject.BOARD,
    serializeObject.CPU,
    serializeObject.GPU,
    serializeObject.RAM,
    serializeObject.SSD,
    serializeObject.HDD,
    serializeObject.POWER,
    serializeObject.COOLER
  );
  dataPush();
});

//데이터 추가
async function dataPush() {
  try {
    const docRef = await addDoc(collection(db, "computer"), {
      estNo: i,
      author: serializeObject.author,
      pw: serializeObject.pw,
      estName: serializeObject.estName,

      BOARD: serializeObject.BOARD,
      BOARD_img: DataImg.BOARD_img,

      CPU: serializeObject.CPU,
      CPU_img: DataImg.CPU_img,

      GPU: serializeObject.GPU,
      GPU_img: DataImg.GPU_img,

      RAM: serializeObject.RAM,
      RAM_img: DataImg.RAM_img,

      SSD: serializeObject.SSD,
      SSD_img: DataImg.SSD_img,

      HDD: serializeObject.HDD,
      HDD_img: DataImg.HDD_img,

      POWER: serializeObject.POWER,
      POWER_img: DataImg.POWER_img,

      COOLER: serializeObject.COOLER,
      COOLER_img: DataImg.COOLER_img,

      OS: "Window11",
      OS_img: "https://cdn1.centrecom.com.au/images/upload/0119289_0.jpeg",
    });
    location.reload();
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//데이터 삭제
$('.deleteForm').on('submit', (e)=>{
  console.log(e.currentTarget);
})
//데이터 보기

let itemlistTmp = ``;
async function dataGet() {
  const querySnapshot = await getDocs(collection(db, "computer"));
  querySnapshot.forEach((doc) => {
    // console.log(querySnapshot.docs.length);
    // console.log(doc);
    // console.log(`${doc.id}`);
    // console.log(`${JSON.stringify(doc.data())}`);
    console.log(doc.data());
    itemlistTmp += `

      <div class="col-sm-3">
        <div>${doc.data().author}의 ${doc.data().estName}</div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal${
          doc.data().author
        }">
          견적 보기
        </button>

        <!-- The Modal -->
        <div class="modal" id="myModal${doc.data().author}">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">${doc.data().author}의 ${
      doc.data().estName
    }</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- Modal body -->
              <div class="modal-body">

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>BOARD</small>
                    <div>${doc.data().BOARD}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().BOARD_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>CPU</small>
                    <div>${doc.data().CPU}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().CPU_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>GPU</small>
                    <div>${doc.data().GPU}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().GPU_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>RAM</small>
                    <div>${doc.data().RAM}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().RAM_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>SSD</small>
                    <div>${doc.data().SSD}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().SSD_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>HDD</small>
                    <div>${doc.data().HDD}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().HDD_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>POWER</small>
                    <div>${doc.data().POWER}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().POWER_img}" width="100">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>COOLER</small>
                    <div>${doc.data().COOLER}</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="${doc.data().COOLER_img}" width="100">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6" id="itemTxtCol">
                    <small>OS</small>
                    <div>Window11</div>
                  </div>
                  <div class="col-sm-6" id="itemImgCol">
                    <img src="https://cdn1.centrecom.com.au/images/upload/0119289_0.jpeg" width="100">
                  </div>
                </div>

              </div>
              <!-- Modal footer -->
              <div class="modal-footer">
                <form action="/" class="deleteForm" id="deleteForm${doc.data().author}">
                  <label for="delete_pw${doc.data().author}">삭제 비밀번호</label>
                  <input type="password" id="delete_pw${doc.data().author}">
                  <button type="submit" class="btn btn-danger deleteBtn" id="deleteSubmit${doc.data().author}">Delete</button>
                </form>
                <button class="btn btn-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
  });
  $("#readDP_list").append(itemlistTmp); 
}

$(document).ready(dataGet());
