<template>
    <div id="addDrug">

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
                                <li><a href="/managerDrug">药品管理</a></li>
                                <li ><a class="active" href="/addDrug">新增药品</a></li>
                                <li ><a href="/disableDrug">已下架药品</a></li>
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
                        <h3>新增药品</h3>
                    </div>
                </div>
                <!-- end::page-header -->

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-body">

                                    <div>

                                        <form  v-model="medicine" class="needs-validation" novalidate id="addMedicine">
                                            <div class="form-row">
                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>药品名称</label>
                                                    <input v-model="medicine.medicineName" type="text" class="form-control" placeholder="名称" value="" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label >生产厂家</label>
                                                    <input v-model="medicine.medicineFactory" type="text" class="form-control" placeholder="生产厂家" value="" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>药品批号</label>
                                                    <input v-model="medicine.medicineNo" type="text" class="form-control" placeholder="批号" value="" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>药品规格</label>
                                                    <input v-model="medicine.medicineSpecification" type="text" class="form-control" placeholder="规格" value="" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>药品类型</label>
                                                    <select v-model="medicine.medicineType" class="form-control">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="1">中药</option>
                                                        <option value="0">西药</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>单位</label>
                                                    <input v-model="medicine.medicineUnit" type="text" class="form-control" id="validationCustom03" placeholder="单位" value="" required>

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label>用法</label>
                                                    <input v-model="medicine.medicineUsage" type="text" class="form-control" placeholder="用法" value="" required>

                                                </div>

                                              <div class="col-md-3 col-xs-3 mb-3">
                                                <label>挂号日期</label>
                                                <el-date-picker

                                                    v-model="medicine.medicineExpire"
                                                    type="date"
                                                    placeholder="选择日期"
                                                    value-format="yyyy-MM-dd">
                                                </el-date-picker>
                                              </div>

                                              <div class="col-md-3 col-xs-3 mb-3">
                                                <label>分类</label>
                                                <input v-model="medicine.medicineClassification" type="text" class="form-control" placeholder="分类" value="" required>

                                              </div>

                                              <div class="col-md-3 col-xs-3 mb-3">
                                                <label>单价</label>
                                                <input v-model="medicine.medicinePrice" type="text" class="form-control" placeholder="单价" value="" required>

                                              </div>
                                              <div class="col-md-9 col-xs-3 mb-3"></div>
                                              <div class="col-md-12 text-center">
                                                  <a class="btn btn-primary"  @click=" addMe()" style="margin-top: 26px;">保存</a>
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
      name: "addDrug",
      data() {
        return {
          medicine: {
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
          }
        }
      },
        methods: {
          addMe() {
            let _this = this
            axios.post('http://localhost:8989/hospital/medicine/add', this.medicine).then(function (response) {
              if (response.data) {
                _this.$alert('新增药品成功！', '新增药品', {
                  confirmButtonText: '确定',
                  callback: action => {

                    window.location.href = "/managerDrug"
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