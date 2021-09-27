<template>
    <div id="drugInformation">

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
                            <ul>
                                <li>药品信息</li>
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
                        <h4>药品详细信息</h4>
                    </div>
                </div>
                <!-- end::page-header -->
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12">

                            <div class="card">

                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                                        <tr>
                                            <td class="col-md-3">药品id:{{medicine.medicineId}}</td>
                                            <td class="col-md-3">药品名称:{{medicine.medicineName}}</td>
                                            <td class="col-md-3">生产厂家:{{medicine.medicineFactory}}</td>
                                            <td class="col-md-3">药品批号:{{medicine.medicineNo}}</td>
                                        </tr>

                                        <tr>
                                            <td class="col-md-3">药品类型:{{medicine.medicineType}}</td>
                                            <td class="col-md-3">药品规格:{{medicine.medicineSpecification}}</td>
                                            <td class="col-md-3">单位:{{medicine.medicineUnit}}</td>
                                            <td class="col-md-3">药品分类:{{medicine.medicineClassification}}</td>
                                        </tr>

                                        <tr>
                                            <td class="col-md-3">失效日期:{{medicine.medicineExpire}}</td>
                                            <td class="col-md-3">库存数量:{{medicine.medicineRepertory}}</td>
                                            <td class="col-md-3">用法:{{medicine.medicineUsage}}</td>
                                            <td class="col-md-3">单价:{{medicine.medicinePrice}}</td>
                                        </tr>
                                    </table>

                                </div>

                                <div class="text-center">
                                  <a class="btn btn-primary" @click=" back()" style="margin-top: 26px;">返回</a>
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
                    medicineId: "",
                    medicineName: "",
                    medicineSpecification: "",
                    medicineNo: "",
                    medicineType: "",
                    medicineClassification: "",
                    medicineUnit: "",
                    medicineUsage: "",
                    medicineExpire: "",
                    medicineFactory: "",
                    medicineRepertory: "",
                    medicineDisable: "",
                    medicinePrice: "",
                }

            }
        },
        created(){
            let id = this.$route.query.fid
            let _this = this
            axios.get('http://localhost:8989/hospital/medicine/find/'+id).then(function (resp) {
                _this.medicine = resp.data
            })
        },
      methods:{
        back(){
          window.location.href = "/managerDrug"
        }
      }
    }

</script>

<style scoped>

</style>