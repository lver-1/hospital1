<template>
  <div>
    <!-- begin::preloader-->
    <div class="preloader">
      <div class="preloader-icon"></div>
    </div>
    <!-- end::preloader -->

    <!-- begin::header -->
    <div class="header">

      <div class="col-md-11" style="text-align: center;">
        <h1>东莞附属医院医生工作站</h1>

      </div>

      <div>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" title="User menu" data-toggle="dropdown">
              <i data-feather="settings"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-big">
              <div class="p-4 text-center d-flex justify-content-between"
                   data-backround-image="assets/media/image/image1.jpg">
                <h6 class="mb-0">Settings</h6>
              </div>
              <div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
                      <label class="custom-control-label" for="customSwitch1">Allow notifications.</label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch2">
                      <label class="custom-control-label" for="customSwitch2">Hide user requests</label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch3" checked>
                      <label class="custom-control-label" for="customSwitch3">Speed up demands</label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch4" checked>
                      <label class="custom-control-label" for="customSwitch4">Hide menus</label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch5">
                      <label class="custom-control-label" for="customSwitch5">Remember next visits</label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch6">
                      <label class="custom-control-label" for="customSwitch6">Enable report generation.</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!-- end::user menu -->
        </ul>

        <!-- begin::mobile header toggler -->
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item header-toggler">
            <a href="#" class="nav-link">
              <i data-feather="arrow-down"></i>
            </a>
          </li>
        </ul>
        <!-- end::mobile header toggler -->
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
                <img class="logo" src="assets/media/image/logo.png" alt="logo">
                <img class="logo-light" src="assets/media/image/logo-light.png" alt="light logo">
              </a>
            </div>
          </div>
          <!-- end::navigation-logo -->

          <div class="navigation-menu-group">
            <div class="open" id="pages">
              <ul>
                <li><a href="/toSeeADoctor">待就诊</a></li>
                <li><a class="active" href="seeADoctor">已就诊</a></li>
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
            <h4>开处方</h4>
          </div>
        </div>
        <!-- end::page-header -->

        <div class="container-fluid">

          <div class="row">
            <div class="col-md-12">

              <div class="card">
              <div class="card-body">
                  <ul class="nav nav-pills mb-3" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="pills-a" data-toggle="pill" href="#pills-1"
                         role="tab" aria-controls="pills-1" aria-selected="true">诊断信息</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" id="pills-b" data-toggle="pill" href="#pills-2"
                         role="tab" aria-controls="pills-2" aria-selected="true">西医处方</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" id="pills-c" data-toggle="pill" href="#pills-3"
                         role="tab" aria-controls="pills-profile" aria-selected="false">中医处方</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" id="pills-d" data-toggle="pill" href="#pills-4"
                         role="tab" aria-controls="pills-home" aria-selected="true">检查项目</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" id="pills-e" data-toggle="pill" href="#pills-5"
                         role="tab" aria-controls="pills-contact" aria-selected="false">处方列表</a>
                    </li>
                  </ul>
                  <form class="needs-validation" novalidate>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="pills-1" role="tabpanel"
                           aria-labelledby="pills-home-tab">
                        <div class="table-responsive">
                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr align="left">
                              <td style="width: 40px;">序号:</td>
                              <td style="width: 40px;">姓名：</td>
                              <td style="width: 40px;">性别：</td>
                              <td style="width: 40px;">年龄：</td>
                              <td style="width: 100px;">身份证号：</td>
                              <td style="width: 40px;">科室：</td>
                              <td style="width: 40px;">医生：</td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td class="text-center">主观资料</td>
                            </tr>
                          </table>
                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td style="width: 30px;">主诉</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td style="width: 30px;">既往史</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td style="width: 30px;">过敏史</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td class="text-center">客观资料</td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr align="left">
                              <td style="width:100px;">血糖：</td>
                              <td style="width:100px;">血压：</td>
                              <td style="width:100px;">体重：</td>
                              <td style="width:100px;">体温：</td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td style="width: 40px;">诊疗信息</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                            <tr>
                              <td style="width: 40px;">诊疗备注</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>

                          <table class="table table-striped table-bordered" style="margin-bottom: 20px;">
                            <tr>
                              <td style="width: 40px;">处置计划</td>
                              <td style="width:435px;"></td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <div class="tab-pane fade" id="pills-2" role="tabpanel"
                           aria-labelledby="pills-profile-tab">
                        <table class="table table-striped table-bordered" style="margin-bottom: 0px;">
                          <tr align="left">
                            <td style="width: 40px;">序号:</td>
                            <td style="width: 40px;">姓名：</td>
                            <td style="width: 40px;">性别：</td>
                            <td style="width: 40px;">年龄：</td>
                            <td style="width: 100px;">身份证号：</td>
                            <td style="width: 40px;">科室：</td>
                            <td style="width: 40px" class="text-center">
                              <button type="button" class="btn btn-primary mr-2 mb-2" data-toggle="modal" data-target=".bd-example-modal-xl">选择药品
                              </button>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div class="tab-pane fade" id="pills-3" role="tabpanel"
                           aria-labelledby="pills-profile-tab"> 这是中医处方页面
                      </div>

                      <div class="tab-pane fade" id="pills-4" role="tabpanel"
                           aria-labelledby="pills-profile-tab"> 这是检查项目页面
                      </div>

                      <div class="tab-pane fade" id="pills-5" role="tabpanel"
                           aria-labelledby="pills-profile-tab"> 这是处方列表页面
                      </div>
                    </div>
                  </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "addPrescription"
}
</script>

<style scoped>

</style>