﻿<template>
  <div id="2538988706" class="popup_layer">
    <div id="6129500366" class="popup_main">
      <img id="7440669318" src="@/img/icon_comingsoon.svg" class="comingsoon">
      <a id="New Service Allarm_X Button" @click="$emit('close')" class="xBtn"><img src="@/img/icon_xBtn.svg"></a>
      <div id="4507885082" class="title">다양한 알림 서비스</div>
      <div id="2747284928" class="textBox">
          차량의 이상 및 이상 동작 발생시,<br>
          문자 알림 서비스
      </div>
      <div id="4586417187" class="subText">
          다음과 같은 상황 발생시 고객님께 문자로<br>
          알림을 드립니다. <br>
          <br>
          - 엔진/ 배터리 상태 이상시<br>
          - 주차 중 견인 감지시<br>
          - 도난경보 발생시 등<br>
          <br>
          이외에 기타 차량의 이상 혹은 이상신호 발생시에도<br>
          안내해드릴 예정입니다.<br>
      </div>
      <a id="New Service Allarm_Close" class="btn" @click="$emit('close')">확인</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Commingsoon02',
  components: {

  }
}
</script>

<style scoped>

/* 팝업(커밍순) */
.popup_layer{ position:fixed; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.7); z-index:10}
.popup_layer .popup_main{ position:absolute; left:5%; top:50%; transform:translateY(-50%); width:90%; background-color:#fff; border:1px solid #28ce99; box-sizing:border-box; padding:80px 10px 20px; text-align:center}
.popup_layer .popup_main .comingsoon{ position:absolute; top:10px; left:10px; width:50px;}
.popup_layer .popup_main .xBtn{ position:absolute; top:12px; right:10px;}
.popup_layer .popup_main .xBtn img{ width:22px;}
.popup_layer .popup_main .title{ font-size:22px; font-weight:800; color:#c8161d; letter-spacing:-0.05em;}
.popup_layer .popup_main .textBox{ width:100%; padding:15px 0; font-size:18px; font-weight:800; color:#333; line-height:1.4; background-image:url('../../img/popup2_bg.png'); background-position:center; background-repeat:no-repeat; background-size:cover; border-radius:5px; margin-top:15px;}
.popup_layer .popup_main .textBox span{ font-size:20px; font-weight:bold; color:#28ce99; font-family: 'Moebius_Bold_eng', sans-serif !important;}
.popup_layer .popup_main .subText{ font-size:14px; font-weight:bold; color:#595757; line-height:1.4; margin-top:20px; letter-spacing:-0.03em}
.popup_layer .popup_main .btn{ display:block; margin:auto; width:40%; height:30px; line-height:35px; font-size:14px; font-weight:bold; color:#fff; text-align:center; background-color:#28ce99; border-radius:4px; margin-top:30px;}


</style>
