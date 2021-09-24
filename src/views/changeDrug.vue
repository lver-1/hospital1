<template>
    <div id="changedDrug">

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
                                <img class="logo" src="assets/media/image/2.png" alt="logo">
                                <img class="logo-light" src="assets/media/image/logo-light.png" alt="light logo">
                            </a>
                        </div>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">
                        <div class="open" id="pages">
                            <h3>修改信息</h3>
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
                        <h4>药品详细信息</h4>
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
                                <input v-model="medicine.medicineName" type="text" class="form-control" placeholder="名称" value="眼药水" required>
                              </div>

                              <div class="col-md-3 col-xs-3 mb-3">
                                <label >生产厂家</label>
                                <input v-model="medicine.medicineFactory" type="text" class="form-control" placeholder="生产厂家" value="科兴" required>
                              </div>

                              <div class="col-md-3 col-xs-3 mb-3">
                                <label>药品批号</label>
                                <input v-model="medicine.medicineNo" type="text" class="form-control" placeholder="批号" value="17717" required>
                              </div>

                              <div class="col-md-3 col-xs-3 mb-3">
                                <label>药品规格</label>
                                <input v-model="medicine.medicineSpecification" type="text" class="form-control" placeholder="规格" value="1g/mg" required>
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
                                <input v-model="medicine.medicineUnit" type="text" class="form-control" id="validationCustom03" placeholder="单位" value="克" required>

                              </div>

                              <div class="col-md-3 col-xs-3 mb-3">
                                <label>用法</label>
                                <input v-model="medicine.medicineUsage" type="text" class="form-control" placeholder="用法" value="" required>

                              </div>

                              <div class="col-md-3 col-xs-3 mb-3">
                                <label>失效日期</label>
                                <el-date-picker
                                    v-model="medicine.medicineExpire"
                                    type="date"
                                    placeholder="选择日期">
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

                              <div class="col-md-6 col-xs-3 mb-3"></div>

                              <div class="col-md-6 text-center">
                                <a class="btn btn-primary" @click="updateMe()" style="margin-top: 26px;">保存</a>
                              </div>

                              <div class="col-md-6 text-center">
                                <a class="btn btn-primary" @click="back()" style="margin-top: 26px;">返回</a>
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
        name: "drugInformation",
        data(){
            return {
                medicine: {
                    medicineId: '',
                    medicineName: "",
                    medicineSpecification: "",
                    medicineNo: "",
                    medicineType: '',
                    medicineClassification: "",
                    medicineUnit: "",
                    medicineUsage: "",
                    medicineExpire: "",
                    medicineFactory: "",
                    medicineRepertory: "",
                    medicineDisable: '',
                    medicinePrice: "",
                }

            }
        },
        created(){
            let id = this.$route.query.cid
            let _this = this
            axios.get('http://localhost:8989/hospital/medicine/find/'+id).then(function (resp) {
                _this.medicine = resp.data
            })
        },
        methods: {
          updateMe() {
            let _this = this
            axios.put('http://localhost:8989/hospital/medicine/update', this.medicine).then(function (response) {

              if (response.data) {
                _this.$alert('修改药品信息成功！', '修改药品', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  callback: action => {

                    window.location.href = "/managerDrug"
                  }
                });
              }
            })
          },
          back(){
            window.location.href = "/managerDrug"
          }
        }
    }
</script>

<style scoped>

</style>