<template>
    <div id="managerStaff">
        <!-- begin::preloader-->
        <div class="preloader">
            <div class="preloader-icon"></div>
        </div>
        <!-- end::preloader -->

        <!-- begin::header -->
        <div class="header">

            <div class="col-md-11" style="text-align: center;">
                <h1>东莞附属医院员工管理系统</h1>
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
                            <img class="logo" src="assets/media/image/2.png" alt="logo">
                        </div>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">
                        <div class="open" id="pages">
                            <ul>
                                <li><a class="active" href="/managerStaff">员工管理</a></li>
                                <li><a href="/addStaff">新增员工</a></li>

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
                        <h4>员工管理</h4>
                    </div>
                </div>
                <!-- end::page-header -->
                <div class="table-responsive">

                    <div class="row">
                        <div class="col-md-12">


                            <div class="card">

                                <div class="card-body">

                                    <div class="row">

                                        <div class="col-sm-12 col-md-4">
                                            <div id="example1_filter" class="dataTables_filter">
                                                <label>查找员工<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></label>
                                            </div>
                                        </div>
                                    </div>

                                    <table id="example1" class="table table-striped table-bordered">

                                        <thead>
                                        <tr>
                                            <th>名字</th>
                                            <th>账号</th>
                                            <td>职工类型</td>
                                            <td>所属科室</td>
                                            <th>删除员工</th>
                                            <th>修改信息</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>名字</td>
                                            <td>账号</td>
                                            <td>职工类型</td>
                                            <td>所属科室</td>
                                            <td>
                                                <a href="#" title="" data-toggle="tooltip" data-original-title="删除">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 width-15 height-15"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </a>
                                            </td>
                                            <td class=""><a href="#">修改</a></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </main>
            <!-- end::main-content -->

        </div>
        <!-- end::main -->
    </div>
</template>

<script>
    export default {
        name: "managerStaff"
    }
</script>

<style scoped>

</style>