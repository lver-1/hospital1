<template>
    <div id="medicine_record">
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
                                <li><a href="/medicine_in">药品入库</a></li>
                                <li><a href="/medicine_out">药品出库</a></li>
                                <li><a class="active" href="/medicine_record">药品出入库记录</a></li>
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
                        <h4>药品记录</h4>
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
                <ul class="nav nav-pills mb-3" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-out-tab" data-toggle="pill" href="#pills-out"
                           role="tab" aria-controls="pills-out" aria-selected="true">出库记录</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-in-tab" data-toggle="pill" href="#pills-in"
                           role="tab" aria-controls="pills-in" aria-selected="true">入库记录</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-out" role="tabpanel"
                         aria-labelledby="pills-out-tab">

                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <form class="form-inline">
                                    <div class="form-group">
                                        <label for="exampleInputEmail2">药品代码</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1">
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputName2">药品名称</label>
                                        <input type="text" class="form-control" id="exampleInputName2">
                                    </div>


                                    <button type="submit" class="btn btn-primary">查询</button>
                                </form>
                            </li>
                        </ul>

                        <div class="container-fluid">

                            <table class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>药品代码</th>
                                    <th>药品名称</th>
                                    <th>单位</th>
                                    <th>单价</th>
                                    <th>出库数量</th>
                                    <th>合计(元)</th>
                                    <th>出库时间</th>
                                    <th>负责人</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in medicineTrackModels">
                                    <td>1365</td>
                                    <td>阿莫西林</td>
                                    <td>盒</td>
                                    <td>1</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>2021-12-2</td>
                                    <td>{{item.medicineManager.medicineManagerName}}</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-in" role="tabpanel"
                         aria-labelledby="pills-in-tab">

                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <form class="form-inline">
                                    <div class="form-group">
                                        <label for="exampleInputEmail2">药品代码</label>
                                        <input type="email" class="form-control" id="exampleInputEmail3">
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputName2">药品名称</label>
                                        <input type="text" class="form-control" id="exampleInputName4">
                                    </div>


                                    <button type="submit" class="btn btn-primary">查询</button>
                                </form>
                            </li>
                        </ul>

                        <div class="container-fluid">

                            <table class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>药品ID</th>
                                    <th>药品名称</th>
                                    <th>入库数量</th>
                                    <th>合计(元)</th>
                                    <th>入库时间</th>
                                    <th>负责人</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in medicineTrackModels">
                                    <td>{{item.medicineTrack.medicineId}}</td>
                                    <td>{{item.medicineTrack.medicineTrackName}}</td>
                                    <td>{{item.medicineTrack.medicineTrackNumber}}</td>
                                    <td>{{item.medicineTrack.medicineTrackTotal}}</td>
                                    <td>{{item.medicineTrack.medicineTrackDate}}</td>
                                    <td>{{item.medicineManager.medicineManagerName}}</td>
                                </tr>
                                </tbody>
                            </table>

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
        name: "Med_rec",
        data() {
            return {
                medicineTrackModels:[
                    {
                        medicineTrack:[],
                        medicineManager:[],
                    }
                ],
                searchResult: {

                },
                medicineTrack:{
                    medicineTrackType:'',
                    medicineTrackName:"",
                    medicineId:'',
                    medicineTrackNumber:'',
                    medicineTrackDate:"",
                    medicineTrackTotal:'',
                    medicineManagerId:'',
                },
                medicineManager:{
                    medicineManagerId:'',
                    medicineManagerName:"",
                    medicineManagerGender:"",
                    medicineManagerAge:'',
                    medicineManagerIdentity:'',
                    medicineManagerPhone:"",
                },
                mt:{
                    name:'',
                    ID:'',
                }
            }
        },
        created(){
            const _this=this
            axios.get('http://localhost:8989/hospital/medicineTrack/findall').then(function (resp) {
                _this.medicineTrackModels=resp.data
            })

        },


        methods: {
            searchMed({name,age,phone, sex}) {
                this.searchResult= this.medicineTrack.filter(item => {
                    let matchName = true; // 姓名 筛选
                    let matchSex = true; // 性别 筛选
                    let matchPhone = true; // 号码 筛选
                    let matchID = true;

                    if (sex) {
                        matchSex = item.patientGender == sex;
                    }

                    if (phone) {
                        // console.info(Object.prototype.toString.call(phone));
                        matchPhone = item.patientPhone == phone;
                    }

                    if (age) {
                        matchAge = item.patientAge == age;
                    }

                    if (name) {
                        // 模糊搜索;
                        const keys = name
                            .toUpperCase() // 转大写
                            .replace(' ', '') // 删掉空格
                            .split(''); // 切割成 单个字

                        matchName = keys.every(key => item.patientName.toUpperCase().includes(key));
                    }
                    return matchName && matchPhone;
                });
            },
            exit(){
                localStorage.removeItem("Flag");
                alert("已退出登录")
                this.$router.push("/login")
            },

        }
    }

</script>