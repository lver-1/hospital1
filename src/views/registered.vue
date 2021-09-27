

<template>
  <div>

    <!-- begin::header -->
    <div class="header">
      <div class="col-md-11" style="text-align: center;">
        <h1>东莞附属医院挂号管理系统</h1>
      </div>
    </div>
    <!-- end::header -->

    <!-- begin::main -->
    <div id="main">

      <!-- begin::navigation -->
      <div class="navigation">



        <!-- begin::navigation menu -->
        <div class="navigation-menu-body">

          <!-- begin::navigation-logo -->
          <div>
            <div id="navigation-logo">
              <a href="index.html">
                <img class="logo" src="assets/media/image/logo.png" alt="logo">
                <img class="logo-light" src="assets/media/image/logo-light.png" alt="light logo">
              </a>
            </div>
          </div>
          <!-- end::navigation-logo -->

          <div class="navigation-menu-group">
            <div class="open" id="pages">
              <ul>
                <li ><a class="active" href="/registered">挂号</a></li>
                <li><a href="/applyCard">办理医疗卡</a></li>
                <li><a href="/queryRegisteredRecord">挂号记录</a></li>
                <li><a href="/login">退出登录</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end::navigation menu -->

      </div>
      <!-- end::navigation -->

      <!-- begin::main-content -->
      <main class="main-content">

        <!-- begin::page-header -->
        <div class="page-header">
          <div class="container-fluid d-sm-flex justify-content-center">
            <h4>挂号</h4>
          </div>
        </div>
        <!-- end::page-header -->

        <div class="container-fluid">

          <div class="row">
            <div class="col-md-12">

              <div class="card">
                <div class="card-body">

                  <div>
                    <el-divider content-position="left">读卡</el-divider>
                      <div class="form-row">
                        <div class="col-md-3 col-xs-3 mb-3">
                          <input type="text" class="form-control" v-model="i" placeholder="请输入卡号" value="">
                        </div>

                        <div>
                          <a @click="findPa(i)" class="btn btn-primary">读卡</a>
                        </div>
                      </div>
                  </div>

                  <br/>
                  <el-divider content-position="left">病人信息</el-divider>

                  <div>
                    <div  v-if="patient.patientName" class="table-responsive">
                      <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                        <tr>
                          <td class="col-md-2">名字</td>
                          <td class="col-md-3">身份证号</td>
                          <td class="col-md-2">性别</td>
                          <td class="col-md-2">年龄</td>
                          <td class="col-md-3">电话号码</td>
                        </tr>
                        <tr>
                          <td class="col-md-2">{{patient.patientName}}</td>
                          <td class="col-md-3">{{patient.patientIdentity}}</td>
                          <td class="col-md-2">{{patient.patientGender}}</td>
                          <td class="col-md-2">{{patient.patientAge}}</td>
                          <td class="col-md-3">{{patient.patientPhone}}</td>
                        </tr>
                      </table>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <el-divider content-position="left">挂号</el-divider>


                    <div class="form-row">
                      <div class="col-md-3 col-xs-3 mb-3">
                        <label>挂号日期</label>
                        <el-date-picker

                            v-model="register.treatDate"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                      </div>

                      <div class="col-md-3 col-xs-3 mb-3">
                        <label>挂号时间段</label>
                        <select v-model="register.treatTime" class="form-control">
                          <option value="8:30——10:00">8:30——10:00</option>
                          <option value="10:00——11:30">10:00——11:30</option>
                          <option value="14:30——16:00">14:30——16:00</option>
                          <option value="16:00——17:30">16:00——17:30</option>
                        </select>
                      </div>

                      <div class="col-md-3 col-xs-3 mb-3"></div>
                      <div class="col-md-3 col-xs-3 mb-3"></div>

                      <div class="col-md-3 col-xs-3 mb-3">
                        <label>挂号类别</label>
                        <select v-model="doctor.doctorLevel" class="form-control" @change="searchDo(doctor),priceDo(doctor.doctorLevel)">
                          <option value=1>专家号</option>
                          <option value=0>普通号</option>
                        </select>
                      </div>

                      <div class="col-md-3 col-xs-3 mb-3">
                        <label>选择科室</label>
                        <select v-model="doctor.doctorDepartment" class="form-control" @change="searchDo(doctor)">
                          <option v-for="item in doctorDep">{{item.name}}</option>
                        </select>
                      </div>

                      <div class="col-md-3 col-xs-3 mb-3">
                        <label>选择医生</label>
                        <select v-model="doctor.doctorName" class="form-control" @change="getDoctorId(doctor)">
                          <option v-for="item in searchResult">{{item.doctorName}}</option>
                        </select>
                      </div>

                      <div class="col-md-1 col-xs-3 mb-3"> </div>

                      <div class="col-md-1 col-xs-3 mb-3">
                        <label>金额</label>
                        <input type= "text" v-model="register.treatPrice" style="text-align: center" class="form-control" readonly= "true">
                      </div>

                      <div class="col-md-12 col-xs-3 mb-3"></div>
                      <div class="col-md-12 text-center">
                        <a class="btn btn-primary" @click="addTreat()" style="margin-top: 26px;">挂号</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
      <!-- end::main-content -->

    </div>
    <!-- end::main -->
  </div>

</template>

<script>
import {register} from "../../public/vendors/quill/quill";

export default {
  name: "registered",
  created() {
    let _this = this
    axios.get('http://localhost:8989/hospital/doctor/list').then(function (resp) {
      _this.doctor = resp.data
    })
  },
  data(){
    return{
      i:"",
      patient:{
        patientId:"",
        patientName:"",
        patientGender:"",
        patientAge:"",
        patientIdentity:"",
        patientPhone:"",
      },
      doctor:{
        doctorId:"",
        doctorName:"",
        doctorDepartment:"",
        doctorLevel:"",
      },
      doctorDep:{
        class1:{
          name:'内科',
        },
        class2:{
          name:'外科',
        },
        class3:{
          name:'儿科',
        },
      },
      searchResult:{

      },
      price:'',
      register:{
        patientId:"",
        doctorId:"",
        treatPrice: "",
        treatTime:"",
        treatDate:"",
      }
    }
  },
  methods:{
    findPa(identity) {
      let _this = this
      axios.get('http://localhost:8989/hospital/patient/find_by_identity/'+identity).then(function (resp) {
        _this.patient = resp.data
      })
    },

    getDoctorId({doctorName}){
      this.Do = this.doctor.filter(item=>{
        let matchName = true;
        if (doctorName) {
          matchName = item.doctorName == doctorName;
        }
        return matchName;
      })
      this.register.doctorId=this.Do[0].doctorId
      this.register.patientId=this.patient.patientId
    },

    searchDo({doctorLevel,doctorDepartment}) {
      this.searchResult= this.doctor.filter(item => {
        let matchLevel = true;
        let matchDepartment = true;
        if (doctorLevel) {
          matchLevel = item.doctorLevel == doctorLevel;
        }
        if (doctorDepartment) {
          matchDepartment = item.doctorDepartment == doctorDepartment;
        }
        return matchLevel&&matchDepartment;
      })
    },

    // priceDo(level){
    //   let price
    //   if(level==1){
    //     price=15
    //   }
    //   if(level==0){
    //     price=8
    //   }
    //   this.treat.treatPrice=price
    //   return price;
    // },
    priceDo(level){
      if(level==1){
        this.register.treatPrice=15
      }
      if(level==0){
        this.register.treatPrice=8
      }
    },


    addTreat(){
      let _this = this
      console.log(this.register)
      axios.post('http://localhost:8989/hospital/treat/add',this.register).then(function (resp){
        if (resp.data) {
          _this.$alert('挂号成功', {
            confirmButtonText: '确定',
            callback: action => {
              location.reload()
            }
          })
        }
      })
    }

  },
}
</script>

<style scoped>

</style>