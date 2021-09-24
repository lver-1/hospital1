<template>
    <div id="drugInformation">
        <!-- begin::main -->
        <div id="main">

            <!-- begin::navigation -->
            <div class="navigation">

                <!-- begin::navigation menu -->
                <div class="navigation-menu-body">

                    <!-- begin::navigation-logo -->
                    <div id="navigation-logo">
                        <a href="index.html">
                            <img class="logo" src="assets/media/image/2.png" alt="logo">
                            <img class="logo-light" src="assets/media/image/logo-light.png" alt="light logo">
                        </a>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">
                        <div class="open" id="pages">
                            <ul>
                                <li><a href="medicine_in.html">药品入库</a></li>
                                <li><a class="active" href="medicine_out.html">药品出库</a></li>
                                <li><a href="medicine_record.html">药品出入库记录</a></li>
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

                                <div class="card-body">
                                    <table id="example1" class="table table-striped table-bordered">
                                        <tr>
                                            <td class="col-md-3">员工id:</td>
                                            <td class="col-md-3">员工名称:</td>
                                            <td class="col-md-3">厂家:</td>
                                            <td class="col-md-3">药品批号</td>
                                        </tr>
                                        <tr>
                                            <td class="col-md-3">药品类型:</td>
                                            <td class="col-md-3">药品规格:</td>
                                            <td class="col-md-3">单位:</td>
                                            <td class="col-md-3">剂量:</td>
                                        </tr>

                                        <tr>
                                            <td class="col-md-3">失效日期:</td>
                                            <td class="col-md-3">库存数量:</td>
                                            <td class="col-md-3">用法:</td>
                                            <td class="col-md-3">单价:</td>
                                        </tr>
                                    </table>

                                </div>

                                <div class="text-center">
                                    <botton class="btn btn-primary" type="botton" onclick="javascrtpt:window.location.href='managerDrug.html'">返回</botton>
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
        name: "drugInformation"
    }
</script>

<style scoped>

</style>