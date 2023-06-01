<template>
  <div class="flex bg-gray-100 w-[1000px] h-full grow ">
    <div class="flex flex-col items-center min-w-[250px] border-r-[2px] border-gray-200  h-[full] px-2 py-5 gap-3">
        <h1 v-on:click="counter.Tab_Function=1" :class="{'bg-sky-500 text-white':counter.Tab_Function==1}" class="bg-gray-300 rounded px-2 py-2 font-bold cursor-pointer w-full">Tách File tăng trưởng</h1>
        <h1 v-on:click="counter.Tab_Function=2" :class="{'bg-sky-500 text-white':counter.Tab_Function==2}" class="bg-gray-300 rounded px-2 py-2 font-bold cursor-pointer w-full">Chức năng chưa có sẵn</h1>
        <h1 v-on:click="counter.Tab_Function=3" :class="{'bg-sky-500 text-white':counter.Tab_Function==3}" class="bg-gray-300 rounded px-2 py-2 font-bold cursor-pointer w-full">Chức năng chưa có sẵn</h1>
        <h1 v-on:click="counter.Tab_Function=4" :class="{'bg-sky-500 text-white':counter.Tab_Function==4}" class="bg-gray-300 rounded px-2 py-2 font-bold cursor-pointer w-full">Chức năng chưa có sẵn</h1>
        <h1 v-on:click="counter.Tab_Function=5" :class="{'bg-sky-500 text-white':counter.Tab_Function==5}" class="bg-gray-300 rounded px-2 py-2 font-bold cursor-pointer w-full">Chức năng chưa có sẵn</h1>
    </div>
    <div class="flex flex-col justify-center items-center w-full py-5">
      <div v-show="counter.Tab_Function==1" class="flex flex-col items-center grow gap-5">
        <div class="flex flex-col justify-center items-center min-h-[500px] border-[2px] border-gray-200 w-full px-2 py-2 gap-5">
          <div class="flex gap-5 justify-center items-center">
            <div v-show="counter.button_function==1||counter.button_function==2||counter.button_function==3" class="flex flex-col gap-2 justify-center items-center">
              <div class="relative flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-file"  class="text-[180px] text-yellow-500"/>
                <div v-show="counter.button_function==3" class="flex justify-center items-center absolute inset-0"><span class="loader"></span></div>
              </div>
              <span id="file-chosen" class="text-[20px] font-semibold">Chọn File ...</span>
            </div>
            <div v-show="counter.button_function==4" class="flex flex-col gap-2 justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-file-circle-check" class="text-[180px] text-lime-600"/>
              <span v-show="counter.button_function==4"  id="file-chosen" class="text-[20px] font-semibold">{{ counter.Return_data }}</span>
            </div>
          </div>
          <div class="flex gap-3">
            <div v-show="counter.button_function==1" class="flex justify-center items-center ">
              <label for="file" class="flex justify-center items-center bg-red-700 w-[200px] h-[50px] text-[18px] rounded font-bold text-gray-100 cursor-pointer">Tải lên Tệp(.xlsx)</label>
              <input type="file" accept=".xlsx"  id="file" ref="file" @change="onFileChange();"  class="file hidden"/>
            </div>
            <div v-show="counter.button_function==2" v-on:click="Send_data();" class="flex justify-center items-center ">
              <h1 class="flex justify-center items-center bg-red-700 w-[200px] h-[50px] text-[18px] rounded font-bold text-gray-100 cursor-pointer">Chuyển đổi</h1>
            </div>
            <!-- <button v-on:click="resetFile()" class="cursor-pointer bg-red-300">reset</button> -->
            <div v-show="counter.button_function==3" class=" flex justify-center items-center">
              <h1 class="flex justify-center items-center bg-gradient-to-r from-red-700 to-cyan-500 w-[200px] h-[50px] text-[18px] rounded font-bold text-gray-100 cursor-wait">Đang chuyển đổi</h1>
            </div>
            <div v-show="counter.button_function==4" v-on:click="delete_zip();" class="flex justify-center items-center cursor-pointer">
              <a class="flex justify-center items-center bg-cyan-500 w-[200px] h-[50px] text-[18px] rounded font-bold text-gray-100" :href="counter.domain_Backend+'/'+counter.Return_data" download>Tải xuống</a>
            </div>
          </div>
          <div v-show="counter.Loi_file==2" class="flex justify-center items-center text-[18px] font-bold rounded text-red-500 border-[1px] border-red-500 px-2 py-1">Tệp tải lên bị lỗi, không phù hợp với chức năng</div>
          <div v-on:click="counter.button_function=1; counter.Loi_file=1; resetFile();"  v-show="counter.button_function==4" class="flex justify-center items-center text-[22px] font-bold underline underline-offset-8 text-sky-600 cursor-pointer">Làm việc với một File khác</div>
        </div>
        <div class="flex flex-col  items-center border-[2px] border-gray-200 px-2  h-full ">
          <div class="flex justify-center items-center w-full  h-[130px] border-b-[2px] border-gray-200"><h1 class="text-[40px] font-bold  w-full text-center">Các bước thực hiện chức năng</h1></div>
          <div class="flex justify-center items-center gap-5  h-full">
              <div class="flex flex-col justify-center items-center text-[25px]">
                <font-awesome-icon icon="fa-solid fa-file-arrow-up" class="text-gray-800 text-[50px]" />
                <h1 class="font-bold text-gray-600">Tải lên Tệp(.xlsx)</h1>
              </div>
              <div class="flex flex-col justify-center items-center text-[25px]">
                <font-awesome-icon icon="fa-solid fa-file-export" class="text-gray-800 text-[50px]"/>
                <h1 class="font-bold text-gray-600">Chuyển đổi Tệp(.xlsx)</h1>
              </div>
              <div class="flex flex-col justify-center items-center text-[25px]">
                <font-awesome-icon icon="fa-solid fa-file-arrow-down" class="text-gray-800 text-[50px]"/>
                <h1 class="font-bold text-gray-600">Tải xuống Tệp(.zip)</h1>
              </div>
          </div>
        </div>
      </div>
      <div v-show="counter.Tab_Function==2" class="text-[50px] font-bold text-gray-300">Chức năng chưa có sẵn</div>
      <div v-show="counter.Tab_Function==3" class="text-[50px] font-bold text-gray-300">Chức năng chưa có sẵn</div>
      <div v-show="counter.Tab_Function==4" class="text-[50px] font-bold text-gray-300">Chức năng chưa có sẵn</div>
      <div v-show="counter.Tab_Function==5" class="text-[50px] font-bold text-gray-300">Chức năng chưa có sẵn</div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import VueCookies from 'vue-cookies'


export default {
    data() {
    return {
        data_file: null,
    };
    },
    setup() {
        const counter = useCounterStore();
        return { counter }
    },
    mounted: function () {
    },
    methods:{
      scrollBehavior(){window.scrollTo(0,0);},
      onFileChange(){
        let image = this.$refs.file.files[0];
        const fileChosen = document.getElementById('file-chosen');
        fileChosen.textContent = image.name
        this.url_image = image;
        this.counter.button_function=2;
    },
    resetFile() {
      this.$refs.file.value = null;
      const fileChosen = document.getElementById('file-chosen');
      fileChosen.textContent = 'Chọn File ...';
      this.counter.button_function=1;
    },
    async Send_data() {
      try{
      this.counter.Loi_file=1;
      this.counter.button_function=3;
      let formData = new FormData();
      formData.append("file", this.$refs.file.files[0]);
      this.counter.Return_data = await axios({ method: 'post',data:formData, headers: {'Content-Type': 'multipart/form-data'}, url: this.counter.domain_Backend + '/get-my-zip-file' });
      // this.counter.Information_Member();
      this.counter.Return_data = this.counter.Return_data.data.data;
      this.counter.button_function=4;
      await this.sleep(60000)
      this.resetFile();
      this.counter.button_function=1;
      await axios({ method: 'post',data:{Return_data:this.counter.Return_data}, url: this.counter.domain_Backend + '/delete-my-zip-file' });
      }
      catch{
        this.counter.button_function=1;
        this.counter.Loi_file = 2;
      }
    },
    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    async delete_zip() {
      await this.sleep(60000)
      this.resetFile();
      this.counter.button_function=1;
      await axios({ method: 'post',data:{Return_data:this.counter.Return_data}, url: this.counter.domain_Backend + '/delete-my-zip-file' });
    },
    },
    components: {
    }
}
</script>

<style>
#cjss::-webkit-scrollbar {
  width: 5px;
  height: 8px;               /* Chiều rộng vùng chứa scrollbar */
}
#cjss::-webkit-scrollbar-track {
  background: #393636;        /* Màu nền ngoài của thanh scrollbar */
}
#cjss::-webkit-scrollbar-thumb {
  background-color: #595857;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
#cjss::-webkit-scrollbar-thumb:hover {
    background-color: #655f58; /* Hiệu ứng di chuột đổi màu*/
}

#cjss1::-webkit-scrollbar {
  width: 5px;
  height: 8px;               /* Chiều rộng vùng chứa scrollbar */
}
#cjss1::-webkit-scrollbar-track {
  background: #393636;        /* Màu nền ngoài của thanh scrollbar */
}
#cjss1::-webkit-scrollbar-thumb {
  background-color: #595857;    /* Màu của thanh cuộn (scroll thumb) */
  border-radius: 5px;       /* Bo góc scroll thumb */
  /* border: 2px solid #ccc;  Không hỗ trợ padding, margin, transition nên dùng viền cùng màu nên để padding scroll thumb */
}
#cjss1::-webkit-scrollbar-thumb:hover {
    background-color: #655f58; /* Hiệu ứng di chuột đổi màu*/
}

#video
{
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg); /* Safari and Chrome */
    -moz-transform:rotateY(180deg); /* Firefox */
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #06b6d4 #06b6d4 transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #FF3D00 #FF3D00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 32px;
  height: 32px;
  border-color: #06b6d4 #06b6d4 transparent transparent;
  animation: rotation 1.5s linear infinite;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
    
/* //////////////////////////////////////////////////// */
.highlight .button {
    display: inline-block;
    color: #fff;
    background: darkred;
    margin: 20px;
    width: 130px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.highlight .button:before {
    content: "";
    position: absolute;
    top: -30px;
    left: -80px;
    height: 100px;
    width: 70px;
    background: rgba(255, 255, 255, .7);
    transform: rotate(20deg);
}

.highlight .button:hover:before {
    left: 150px;
    transition: all .5s;
}
.highlight {margin-bottom:100px;}
  
</style>


