<template>
  <div>

    <!-- begin::header -->
    <div class="header">
      <div class="col-md-11" style="text-align: end;">
        <h3>小米，你好</h3>
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
                <li><a href="/registered">挂号</a></li>
                <li><a class="active" href="/applyCard">办理医疗卡</a></li>
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
            <h4>办理医疗卡</h4>
          </div>
        </div>
        <!-- end::page-header -->

        <div class="container-fluid">

          <div class="row">
            <div class="col-md-12">

              <div class="card">
                <div class="card-body">
                  <div>
                    <h5 class="text-center card-title">病人信息</h5>

                    <form  v-model="patient" class="needs-validation" novalidate >
                      <div class="form-row">
                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>姓名</label>
                          <input type="text" class="form-control" v-model="patient.patient_name" placeholder="姓名" value="">
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>身份证号</label>
                          <input type="text" class="form-control" v-model="patient.patient_identity" placeholder="身份证号" value="">
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label v-model="patient.patient_gender" style="margin-bottom: 8px;">性别</label>
                          <select v-model="patient.patient_gender" class="form-control" id="sex">
                            <option value="男">男</option>
                            <option value="女">女</option>
                          </select>
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>年龄</label>
                          <input type="text" class="form-control" v-model="patient.patient_age" placeholder="年龄" value="">
                        </div>

<!--                        <div class="col-md-2 col-xs-3 mb-3">-->
<!--                          <label>血型</label>-->
<!--                          <select v-model="patient.patient_married" class="form-control">-->
<!--                            <option value="0">A型</option>-->
<!--                            <option value="1">B型</option>-->
<!--                            <option value="3">0型</option>-->
<!--                            <option value="2">AB型</option>-->
<!--                          </select>-->
<!--                        </div>-->

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>出生日期</label>
                          <el-date-picker
                              v-model="patient.patient_birth"
                              type="date"
                              placeholder="选择日期"
                              value-format="yyyy-MM-dd">
                          </el-date-picker>
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>手机号码</label>
                          <input type="text" class="form-control" v-model="patient.patient_phone" placeholder="电话" value="">
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>婚姻状况</label>
                          <select v-model="patient.patient_married" class="form-control">
                            <option value="0">未婚</option>
                            <option value="1">已婚</option>
                            <option value="2">离异</option>
                            <option value="3">丧偶</option>
                          </select>
                        </div>

                        <div class="col-md-3 col-xs-3 mb-3">
                          <label>文化程度</label>
                          <select v-model="patient.patient_education" class="form-control">
                            <option value="小学及以下">小学及以下</option>
                            <option value="初中">初中</option>
                            <option value="高中">高中</option>
                            <option value="大学及以上">大学及以上</option>
                          </select>
                        </div>


                        <div class="col-md-2 col-xs-3 mb-3">
                          <label>省</label>
                          <input type="text" class="form-control" v-model="address.addressProvince" placeholder="所属省" value="">
                        </div>

                        <div class="col-md-2 col-xs-3 mb-3">
                          <label>市</label>
                          <input type="text" class="form-control" v-model="address.addressCity" placeholder="所属市" value="">
                        </div>

                        <div class="col-md-2 col-xs-3 mb-3">
                          <label>区</label>
                          <input type="text" class="form-control" v-model="address.addressTown" placeholder="所属区" value="">
                        </div>

                        <div class="col-md-4 col-xs-3 mb-3">
                          <label>详细地址</label>
                          <input type="text" class="form-control" v-model="address.addressDetail" placeholder="详细地址" value="">
                        </div>

                        <div class="col-md-9 col-xs-3 mb-3"></div>
                        <div class="col-md-12 text-center">
                          <a class="btn btn-primary" @click="addPatient()" style="margin-top: 26px;">办理</a>
                        </div>

                      </div>
                    </form>

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
export default {
  name: "applyCard",
  data(){
    return{
      patient:{
        patient_id:"",
        patient_name:"",
        patient_gender:"",
        patient_age:"",
        patient_identity:"",
        patient_phone:"",
        patient_birth:"",
        patient_married:"",
        patient_education:"",
      },
      address:{
        addressProvince:"",
        addressCity:"",
        addressTown:"",
        addressDetail:"",
      },
    }
  },
  methods: {
    addPatient() {
      let _this = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8989/hospital/patient/add',
        header:{
          'Content-Type': "application/json;charset=UTF-8"
        },
        data: {
          param1: this.patient,
          param2: this.address,
        }
      }).then(function (response) {
        if (response.data) {
          _this.$alert('办理成功！', '办理诊疗卡', {
            confirmButtonText: '确定',
            callback: action => {
              document.location.reload();
            }
          });
        }
      })
    }
  }
 }
</script>

<style scoped>

</style>