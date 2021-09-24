<template>
    <div id="medicine_in">
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
                                <li><a class="active" href="/medicine_in">药品入库</a></li>
                                <li><a href="/medicine_out">药品出库</a></li>
                                <li><a href="/medicine_record">药品出入库记录</a></li>
                                <li><a href="/managerDrug">药品管理</a></li>
                                <li ><a href="/addDrug">新增药品</a></li>
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
                    <div class="container-fluid d-sm-flex justify-content-between">
                        <h4>药品入库</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a  @click="exit()">退出登录</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!-- end::page-header -->

                <div class="container-fluid">

                    <div class="container-fluid">

                        <table class="table table-striped table-bordered">

                            <thead>
                            <tr>
                                <th>药品类型</th>
                                <th>药品分类</th>
                                <th>药品名称</th>
                                <th>单位</th>
                                <th>单价</th>
                                <th>入库数量</th>
                                <th>入库时间</th>
                                <th>金额(元)</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <select v-model="medicine.medicineType" class="form-control" @change="searchMedicine(medicine)">
                                        <option value=1>中药</option>
                                        <option value=0>西药</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="medicine.medicineClassification" class="form-control" @change="searchMedicine(medicine)">
                                        <option v-for="item in medicineC">{{item.name}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="class" v-model="medicine.medicineName" class="form-control" @change="getUnitAndPrice(medicine)">
                                        <option v-for="item in searchResult">{{item.medicineName}}</option>
                                    </select>

                                </td>
                                <td>
                                    <p v-for="item in med2">{{item.medicineUnit}}</p>
                                </td>
                                <td>
                                    <p v-for="item in med2">{{item.medicinePrice}}</p>
                                </td>
                                <td class="text-center">
                                    <input v-model="amount" type="text"  @change="countTotal()" class="form-control" id="amount">
                                </td>
                                <td>
                                    <div class="block">
                                        <el-date-picker
                                                v-model="medicineTrack.medicineTrackDate"
                                                type="date"
                                                placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </td>
                                <td>
                                    <p>{{total}}</p>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <a @click="addAmount()" class="btn btn-primary">入库</a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </main>
            <!-- end::main-content -->

        </div>
    </div>
</template>

<script>

    export default {
        name: "Med_in",
        data() {
            return {
                amount:"",
                total:"",
                medicineC:{
                    class1:{
                      name:'感冒药',
                    },
                    class2:{
                        name:'抗生素类',
                    },
                    class3:{
                        name:'冲剂',
                    },
                    class4:{
                        name:'药丸',
                    },
                    class5:{
                        name:'外敷药',
                    },
                    class6:{
                        name:'化学药品',
                    },
                },
                med2:{
                    medicineRepertory:'',
                },
                searchResult: {
                },
                medicine:{
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
                },
                medicineTrack:{
                    medicineTrackName:"",
                    medicineTrackType:"",
                    medicine_id:'',
                    medicineTrackNumber:"",
                    medicineTrackDate:"",
                    medicineTrackTotal:"",
                    medicineManagerId:"",
                },
            }
        },
        created(){
            const _this=this
            axios.get('http://localhost:8989/hospital/medicine/list/0').then(function (resp) {
                _this.medicine=resp.data
                console.log(_this.medicine)
            })
            this.medicineTrack.medicineManagerId=localStorage.getItem("Id")
            //alert(localStorage.getItem("name")+"你好")

        },

        methods: {
            searchMedicine({medicineType,medicineClassification}) {
                this.searchResult= this.medicine.filter(item => {
                    let matchClass = true;
                    let matchType = true;
                    if (medicineType) {
                        matchType = item.medicineType == medicineType;
                    }
                    if (medicineClassification) {
                        matchClass = item.medicineClassification == medicineClassification;
                    }
                    return matchClass&&matchType;
                })
            },
            getUnitAndPrice({medicineName}){
                this.med2 = this.medicine.filter(item=>{
                    let matchName = true;
                    if (medicineName) {
                        matchName = item.medicineName == medicineName;
                    }
                    return matchName;
                })
            },
            countTotal(){
                let _this = this
                let amount = parseInt(this.amount)
                let price = parseInt(this.med2[0].medicinePrice)
                this.total = amount*price
                this.med2[0].medicineRepertory=this.med2[0].medicineRepertory+amount

                this.medicineTrack.medicine_id=this.med2[0].medicineId
                this.medicineTrack.medicineTrackName=this.med2[0].medicineName
                this.medicineTrack.medicineTrackType=0 // 0为入库，1为出库
                this.medicineTrack.medicineTrackNumber=amount
                this.medicineTrack.medicineTrackTotal=this.total.toString()
                //this.medicineTrack.medicineManagerId=1


            },
            addAmount() {
                let _this = this
                console.log(_this.medicineTrack)
                axios.post('http://localhost:8989/hospital/medicineTrack/add', this.medicineTrack).then(function (response) {

                    if (response.data) {
                        _this.$alert('药品入库成功！', '修改药品', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            callback: action => {

                                window.location.href = "/medicine_in"
                            }
                        });
                    }
                })

                 axios.put('http://localhost:8989/hospital/medicine/update', this.med2[0]).then(function (response) {

                     if (response.data) {
                         _this.$alert('修改药品信息成功！', '修改药品', {
                             confirmButtonText: '确定',
                             cancelButtonText: '取消',
                             callback: action => {

                                 window.location.href = "/medicine_in"
                             }
                         });
                     }
                  })

            },


            exit(){
                localStorage.removeItem("Flag");
                alert("已退出登录")
                this.$router.push("/login")
            }

        }
    }

</script>