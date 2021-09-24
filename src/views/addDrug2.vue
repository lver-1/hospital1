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
                                <img class="logo" src="assets/media/image/2.png" alt="logo">
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

                                        <form class="needs-validation" novalidate id="myForm" action="registeredCharge.html" method="POST">
                                            <div class="form-row">
                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">药品id</label>
                                                    <input type="text" class="form-control" id="validationCustom02" placeholder="id" value="1" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">药品名称</label>
                                                    <input type="text" class="form-control" placeholder="名称" value="眼药水" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">生产厂家</label>
                                                    <input type="text" class="form-control" placeholder="生产厂家" value="科兴" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">药品批号</label>
                                                    <input type="text" class="form-control" placeholder="批号" value="17717" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">药品规格</label>
                                                    <input type="text" class="form-control" placeholder="规格" value="1g/mg" required>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">药品类型</label>
                                                    <select class="form-control">
                                                        <option style="color: slategray;">请选择</option>
                                                        <option value="中药">中药</option>
                                                        <option value="西药">西药</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">剂量</label>
                                                    <input type="text" class="form-control" placeholder="剂量" value="1片/次" required>

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">单位</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="单位" value="克" required>

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">用法</label>
                                                    <input type="text" class="form-control" placeholder="用法" value="" required>

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">失效日期</label>
                                                    <input type="text" name="daterangepicker" class="form-control">

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">库存数量</label>
                                                    <input type="text" class="form-control" placeholder="库存数量" value="123" required>

                                                </div>

                                                <div class="col-md-3 col-xs-3 mb-3">
                                                    <label for="validationCustom02">单价</label>
                                                    <input type="text" class="form-control" placeholder="单价" value="15/瓶" required>

                                                </div>

                                            </div>
                                            <div class="col-md-9 col-xs-3 mb-3"></div>
                                            <div class="col-md-12 text-center">
                                                <button class="btn btn-primary" type="submit" style="margin-top: 26px;">保存</button>
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
        name: "addDrug"
    }
</script>

<style scoped>

</style>