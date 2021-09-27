<template>
  <div>
    <!-- begin::preloader-->
    <div class="preloader">
      <div class="preloader-icon"></div>
    </div>
    <!-- end::preloader -->

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
                <li><a href="/registered">挂号</a></li>
                <li><a href="/applyCard">办理医疗卡</a></li>
                <li><a class="active" href="/queryRegisteredRecord">挂号记录</a></li>
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
            <h4>查询挂号记录</h4>
          </div>
        </div>
        <!-- end::page-header -->
        <div class="container-fluid">

          <div class="row">
            <div class="col-md-12">

              <div class="card">
                <div class="card-body">

                  <el-table
                      :data="registereds.filter(data => !search || data.patient.patientName.toLowerCase().includes(search.toLowerCase()))"
                      style="width: 100%"
                      height="520">



                    <el-table-column
                        label="病人名字"
                        prop="patient.patientName">
                    </el-table-column>

                    <el-table-column
                        label="病人身份证号"
                        prop="patient.patientIdentity">
                    </el-table-column>

                    <el-table-column
                        label="预约日期"
                        prop="treat.treatDate">
                    </el-table-column>

                    <el-table-column
                        label="预约时间段"
                        prop="treat.treatTime">
                    </el-table-column>

                    <el-table-column
                        label="所挂科室"
                        prop="doctor.doctorDepartment">
                    </el-table-column>

                    <el-table-column
                        label="医生名字"
                        prop="doctor.doctorName">
                    </el-table-column>

                    <el-table-column
                        label="挂号费用"
                        prop="treat.treatPrice">
                    </el-table-column>

                    <el-table-column
                        align="right">
                      <template slot="header" slot-scope="scope">
                        <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入病人关键字搜索"/>
                      </template>
                    </el-table-column>

                  </el-table>

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
  name: "queryRegisteredRecord",
  created(){
    let _this = this
    axios.get('http://localhost:8989/hospital/treat/findall').then(function (resp) {
      _this.registereds = resp.data
    })
  },
  data(){
    return{
      // registered:{
      //   patientId:"",
      //   doctorId:"",
      //   treatPrice:"",
      // },
      registereds: [{
        treat: [],
        patient: [],
        doctor: [],
      }],
      treat: {
        patientId:"",
        doctorId:1,
        doctor_lv:"",
        treatPrice:"",
        treatStatus:"",
      },
      patient: {
        patientId:"",
        patientName:"",
        patientGender:"",
        patientAge:"",
        patientIdentity:"",
        patientPhone:"",
      },
      doctor: {
        doctorId:"",
        doctorName:"",
        doctorDepartment:"",
        doctorLevel:"",
      },
      search:"",
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>