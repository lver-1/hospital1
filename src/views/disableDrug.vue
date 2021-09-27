<template>
  <div id="managerDrug">

    <!-- begin::header -->
    <div class="header">
      <div class="container-fluid d-sm-flex justify-content-end">
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
              <img class="logo" src="assets/media/image/2.png" alt="logo">
            </div>
          </div>
          <!-- end::navigation-logo -->

          <div class="navigation-menu-group">
            <div class="open" id="pages">
              <ul>
                <li><a class="active" href="/managerDrug">药品管理</a></li>
                <li ><a href="/addDrug">新增药品</a></li>
                <li ><a class="active" href="/disableDrug">已下架药品</a></li>
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
            <h4>药品管理</h4>
          </div>
        </div>
        <!-- end::page-header -->

        <div class="container-fluid">

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">

                  <el-table
                      :data="medicine.filter(data => !search || data.medicineName.toLowerCase().includes(search.toLowerCase()))"
                      style="width: 100%"
                      height="520">

                    <el-table-column
                        label="药品id"
                        prop="medicineId">
                    </el-table-column>

                    <el-table-column
                        label="药品名字"
                        prop="medicineName">
                    </el-table-column>
                    <el-table-column
                        label="药品价格"
                        prop="medicinePrice">
                    </el-table-column>
                    <el-table-column
                        align="right">
                      <template slot="header" slot-scope="scope">
                        <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                      </template>
                      <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary" plain round
                            @click="findMedicine(scope.row)">查看全部信息</el-button>
                        <el-button
                            size="mini"
                            type="warning" plain round
                            @click="updateMedicine(scope.row)">修改</el-button>
                        <el-button
                            size="mini"
                            type="danger" plain round
                            @click="medicineBan(scope.row)">上架</el-button>
                      </template>
                    </el-table-column>

                  </el-table>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </main>
      <!-- end::main-content -->

    </div>
    <!-- end::main -->
  </div>
</template>

<script>
export default {

  name: "disableDrug",
  created(){
    let _this = this

    axios.get('http://localhost:8989/hospital/medicine/list/1').then(function (resp) {
      _this.medicine = resp.data
    })

  },

  data(){
    return {
      medicine: {
        medicineId: "",
        medicineName: "",
        medicineFactory: "",//厂家
        medicineNo: "",//批号
        medicineSpecification: "",//规格
        medicineType: "",//类型
        medicineUnit: "",//单位
        medicineUsage: "",//用法
        medicineExpire: "",//失效日期
        medicineClassification: "",//分类
        medicineDisable: 0,//是否上架
        medicineRepertory: 0,//库存
        medicinePrice: ""
      },
      search: ''
    }
  },

  methods: {

    findMedicine(object) {
      this.$router.push('/drugInformation?fid=' + object.medicineId)
    },

    updateMedicine(object) {
      this.$router.push('/changeDrug?cid=' + object.medicineId)
    },

    medicineBan(object) {
      let _this = this
      this.$confirm('是否确定要上架' + object.medicineName + '？', '上架药品', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        axios.put('http://localhost:8989/hospital/medicine/change_status/' + object.medicineId).then(function (response) {
          if (response.data) {
            _this.$alert(object.medicineName + '上架成功！', '上架药品', {
              confirmButtonText: '确定',
              callback: action => {
                //跳转到/table
                location.reload()
              }
            });
          }
        })

      }).catch(() => {

      });

    },
  }
}
</script>

<style scoped>

</style>