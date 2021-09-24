<template>
    <div id="charge">
        <div id="main">

            <!-- begin::navigation -->
            <div class="navigation">

                <!-- begin::navigation menu -->
                <div class="navigation-menu-body">

                    <!-- begin::navigation-logo -->
                    <div>
                        <div id="navigation-logo">
                            <a href="index.html">
                                <img class="logo" src="assets/media/image/hospital_logo.png" alt="logo">
                                <img class="logo-light" src="assets/media/image/logo-light.png" alt="light logo">
                            </a>
                        </div>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">

                        <div class="open" id="pages">
                            <ul>
                                <li><a class="active" href="/charge">门诊收费</a></li>
                                <li><a href="/refund">门诊退费</a></li>
                                <li><a href="/daily_junction">门诊收费员日结</a></li>
                                <li><a href="/fund_record">收/退费记录</a></li>

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
                        <h4>门诊收费</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="login.html">退出登录</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!-- end::page-header -->

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12">

                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="exampleInputEmail2">电话号码</label>
                                    <input type="text" v-model="patients.phone" class="form-control" id="exampleInputEmail2">
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputName2">姓名</label>
                                    <input type="text" v-model="patients.name" class="form-control" id="exampleInputName2">
                                </div>


                                <a @click="search(patients)" class="btn btn-primary">查询</a>
                            </form>


                        </div>
                    </div>
                </div>

                    <div v-if="searchResult.length>0" class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">年龄</th>
                                <th scope="col">性别</th>
                                <th scope="col">手机号</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in searchResult">
                                <th scope="row">{{item.name}}</th>
                                <td>{{item.id}}</td>
                                <td>{{item.sex}}</td>
                                <td>{{item.phone}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-if="searchResult.length==1" class="container-fluid">

                        <table id="myTable" class="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>单号</th>
                                <th>收费项目</th>
                                <th>状态</th>
                                <th class="text-center" scope="col">详情</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>13</td>
                                <td>药品</td>
                                <td>未缴费</td>
                                <td class="text-center">

                                    <div class="modal fade" id="myModal">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <!-- Modal Header -->
                                                <div class="modal-header">
                                                    <button type="button" class="close"
                                                            data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">收费详情</h4>
                                                </div>
                                                <!-- Modal Body -->
                                                <div class="modal-body">
                                                    <table id="myTable" class="table table-striped table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th>代码</th>
                                                            <th>名称</th>
                                                            <th>单位</th>
                                                            <th>数量</th>
                                                            <th>合计(元)</th>
                                                            <th>收费时间</th>
                                                            <th>操作</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1356885</td>
                                                            <td>阿莫西林</td>
                                                            <td>粒</td>
                                                            <td>1</td>
                                                            <td>4</td>
                                                            <td>
                                                                <input type="text" name="daterangepicker" class="form-control">
                                                            </td>
                                                            <td class="text-center">
                                                                <div class="dropdown">
                                                                    <button type="button" class="btn btn-primary">
                                                                        收费
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- Modal Footer -->
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default"
                                                            data-dismiss="modal">关闭</button>
                                                    <button type="button" class="btn btn-primary">
                                                        全部收费
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="dropdown">
                                        <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
                                            查看
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>


            </main>
            <!-- end::main-content -->

        </div>
    </div>
</template>

<script>

    export default {
        name: "Patients",
        data() {
            return {
                searchResult: [],
                patients: [
                    {
                        id:1,
                        name: '张三',
                        age: 22,
                        sex: '男',
                        phone: '1987425632'
                    },
                    {
                        id:2,
                        name: '李四',
                        age: 63,
                        sex: '男',
                        phone: '12589647535'
                    },
                    {
                        id:3,
                        name: '张红',
                        age: 41,
                        sex: '女',
                        phone: '15268959636'
                    }
                ]
            }
        },
        methods: {
            search({name,age,phone, sex}) {
                this.searchResult= this.patients.filter(item => {
                    let matchName = true; // 姓名 筛选
                    let matchSex = true; // 性别 筛选
                    let matchPhone = true; // 号码 筛选
                    let matchID = true;

                    if (sex) {
                        matchSex = item.sex == sex;
                    }

                    if (phone) {
                        // console.info(Object.prototype.toString.call(phone));
                        matchPhone = item.phone == phone;
                    }

                    if (age) {
                        matchAge = item.age == age;
                    }

                    if (name) {
                        // 模糊搜索;
                        const keys = name
                            .toUpperCase() // 转大写
                            .replace(' ', '') // 删掉空格
                            .split(''); // 切割成 单个字

                        matchName = keys.every(key => item.name.toUpperCase().includes(key));
                    }
                    return matchName && matchPhone;
                });
            },

        }
    }

</script>
