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
                                    <a href="/login">退出登录</a>
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
                            <tr v-bind:class="unit_and_price.unit">
                                <td>
                                    <select v-model="m.medicineType" class="form-control" @change="searchMedicine(m)">
                                        <option value=1>中药</option>
                                        <option value=0>西药</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="m.medicineClassification" class="form-control" @change="searchMedicine(m)">
                                        <option v-for="item in medicineC">{{item.name}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="unit_and_price.name" class="form-control" @change="getUnitAndPrice(unit_and_price)">
                                        <option v-for="item in searchResult">{{item.medicineName}}</option>

                                    </select>
                                </td>
                                <td>

                                    {{unit_and_price2.medicineUnit}}

                                </td>
                                <td>1</td>
                                <td class="text-center">
                                    <input type="text" class="form-control" id="refund_amount">
                                </td>
                                <td>
                                    <input type="text" class="form-control">
                                </td>
                                <td>10</td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <button type="submit" class="btn btn-primary">
                                            入库
                                        </button>
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
        name: "Medicine",
        data() {
            return {
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
                        name:'外用药',
                    },
                },
                unit_and_price:{
                    name:'',
                },

                unit_and_price2:{

                },
                searchResult: {
                },

                medicine:[{

                }],

                m:{
                    medicineType:'',
                    medicineClassification:'',

                },
            }
        },
        created(){
            const _this=this
            axios.get('http://localhost:8989/hospital/medicine/list/0').then(function (resp) {
                _this.medicine=resp.data
                console.log(_this.medicine)
            })

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
                this.searchResult1=this.searchResult;
            },
            getUnitAndPrice({name}){
                this.unit_and_price2= this.searchResult.filter(item=>{
                    let matchName = true;
                    if (name) {
                        matchName = item.medicineName == name;
                    }
                    return matchName;
                })
            }

        }
    }

</script>