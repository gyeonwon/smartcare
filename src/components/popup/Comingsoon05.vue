﻿<template>
  <div id="2538988706" class="popup_layer">
    <div id="6129500366" class="popup_main">
      <img id="7440669318" src="@/img/icon_comingsoon.svg" class="comingsoon">
      <a id="New Service Car repair Alarm_X Button" @click="$emit('close')" class="xBtn"><img src="@/img/icon_xBtn.svg"></a>
      <div id="4507885082" class="title">정비업소 알림/예약 서비스</div>
      <div id="2747284928" class="textBox">
          소모품 교환 주기에 맞추어 가까운<br>
          정비업소를 추천하고 예약해주는 서비스
      </div>
      <div id="4586417187" class="subText">
          고객님의 차량 이용 패턴과 주행 환경을 분석하여<br>
          소모품 교환 주기에 맞추어 가까운 정비업소를<br>
          추천/예약 및 정비할인을 제공해드립니다.<br>
      </div>
      <a id="New Service Car repair Alarm_Close" class="btn" @click="$emit('close')">확인</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Commingsoon05',
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
.popup_layer .popup_main .textBox{ width:100%; padding:15px 0; font-size:18px; font-weight:800; color:#333; line-height:1.4; background-image:url('../../img/popup5_bg.png'); background-position:center; background-repeat:no-repeat; background-size:cover; border-radius:5px; margin-top:15px;}
.popup_layer .popup_main .textBox span{ font-size:20px; font-weight:bold; color:#28ce99; font-family: 'Moebius_Bold_eng', sans-serif !important;}
.popup_layer .popup_main .subText{ font-size:14px; font-weight:bold; color:#595757; line-height:1.4; margin-top:20px; letter-spacing:-0.03em}
.popup_layer .popup_main .btn{ display:block; margin:auto; width:40%; height:30px; line-height:35px; font-size:14px; font-weight:bold; color:#fff; text-align:center; background-color:#28ce99; border-radius:4px; margin-top:30px;}


</style>
