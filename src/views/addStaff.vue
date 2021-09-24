<template>
    <div id="addStaff">
        <!-- begin::header -->
        <div class="header">

            <div class="col-md-11" style="text-align: center;">
                <h1>东莞理工附属医院员工管理系统</h1>

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
                                <img class="logo" src="assets/media/image/2.png" alt="logo">

                            </a>
                        </div>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">
                        <div class="open" id="pages">
                            <ul>
                                <li><a href="/managerStaff">员工管理</a></li>
                                <li ><a class="active" href="/addStaff">新增员工</a></li>

                                <li><a href="#">退出登录</a></li>
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
                        <h4>新增员工</h4>
                    </div>
                </div>
                <!-- end::page-header -->

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-body">

                                    <div>

                                        <form class="needs-validation" novalidate id="myForm" action="registeredCharge.html" method="POST">
                                            <div class="form-row">
                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">姓名</label>
                                                    <input type="text" class="form-control" id="validationCustom02" placeholder="姓名" value="张三" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">身份证号</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="身份证号" value="440902199712142416" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom01" style="margin-bottom: 8px;">性别</label>
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="男">男</option>
                                                        <option value="女">女</option>
                                                    </select>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">年龄</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="年龄" value="20" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">手机号</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="手机号" value="123" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>


                                                <div class="col-md-6 col-xs-3 mb-3">
                                                    <label for="validationCustom02">居住地址</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="居住地址" value="广东" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">婚姻状况</label>
                                                    <select class="form-control">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="France">未婚</option>
                                                        <option value="Brazil">已婚</option>
                                                        <option value="Brazil">离异</option>
                                                        <option value="Brazil">丧偶</option>

                                                    </select>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">职工类型</label>
                                                    <select class="form-control">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="挂号管理员">挂号管理员</option>
                                                        <option value="医生">医生</option>
                                                        <option value="仓库管理员">仓库管理员</option>
                                                        <option value="收费管理员">收费管理员</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">职工级别</label>
                                                    <select class="form-control">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="普通">普通</option>
                                                        <option value="专家">专家</option>

                                                    </select>
                                                </div>


                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">所属科室</label>
                                                    <select class="form-control">
                                                        <option style="color: slategray;">--请选择--</option>
                                                        <option>请选择</option>
                                                        <option value="无">无</option>
                                                        <option value="急诊科">急诊科</option>
                                                        <option value="心内科">心内科</option>
                                                        <option value="消化科">消化科</option>
                                                        <option value="神经内科">神经内科</option>
                                                        <option value="肾内科">肾内科</option>
                                                        <option value="院感科">院感科</option>
                                                        <option value="肿瘤科">肿瘤科</option>
                                                        <option value="风湿免疫科">风湿免疫科</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">密码</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="密码" value="" required>
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>

                                                </div>
                                                <div class="col-md-9 col-xs-3 mb-3"></div>
                                                <div class="col-md-12 text-center">
                                                    <button class="btn btn-primary" type="submit" style="margin-top: 26px;">注册</button>
                                                </div>
                                            </div>
                                            </div>

                                    </form>
                                </div>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
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
        name: "addStaff"
    }
</script>

<style scoped>

</style>