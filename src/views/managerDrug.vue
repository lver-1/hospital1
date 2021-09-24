<template>
    <div id="managerDrug">

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
                            <img class="logo" src="assets/media/image/2.png" alt="logo">
                        </div>
                    </div>
                    <!-- end::navigation-logo -->

                    <div class="navigation-menu-group">
                        <div class="open" id="pages">
                            <ul>
                                <li><a class="active" href="/managerDrug">药品管理</a></li>
                                <li ><a href="/addDrug">新增药品</a></li>
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
                        <h4>药品管理</h4>
                    </div>
                </div>
                <!-- end::page-header -->

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
<!--                                  <input type="text" id="myInput" @click="myFunction()" placeholder="搜索...">-->

                                    <table id="myTable" class="table table-striped table-bordered">

                                        <thead>
                                        <tr>
                                            <th class="col-md-2">药品id</th>
                                            <th class="col-md-2">药品名称</th>
                                            <th class="col-md-2">价格</th>
                                            <th class="col-md-2">查看全部信息</th>
                                            <th class="col-md-2">修改药品信息</th>
                                            <th class="col-md-2">下架药品</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr v-for="item in medicine">
                                            <td>{{item.medicineId}}</td>
                                            <td>{{item.medicineName}}</td>
                                            <td>{{item.medicinePrice}}</td>
                                            <td><button class="btn btn-primary disabled" @click="findMedicine(item)">查看</button></td>
                                            <td><button class="btn btn-primary disabled" @click="updateMedicine(item)">修改</button></td>
                                            <td><button class="btn btn-primary disabled" @click="medicineBan(item)">下架</button></td>
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
        name: "managerDrug",

        created(){
            let _this = this
            axios.get('http://localhost:8989/hospital/medicine/list/0').then(function (resp) {
                _this.medicine = resp.data

            })
            
        },

        data(){
            return {
                medicine: {},
            }
        },

        methods:{
            findMedicine(object){
                this.$router.push('/drugInformation?fid='+object.medicineId)
            },

            updateMedicine(object){
                this.$router.push('/changeDrug?cid='+object.medicineId)
            },


          medicineBan(object) {
            let _this = this
            this.$confirm('是否确定要下架' + object.medicineName + '？', '下架药品', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {

              axios.put('http://localhost:8989/hospital/medicine/change_status/' + object.medicineId).then(function (response) {
                if (response.data) {
                  _this.$alert(object.medicineName + '下架成功！', '下架药品', {
                    confirmButtonText: '确定',
                    callback: action => {
                      //跳转到/table
                      location.reload()
                    }
                  });
                }
              })

            }).catch(() => {

            });

          },
          // myFunction() {
          //   // 声明变量
          //   var input, filter, table, tr, td, i;
          //   input = document.getElementById("myInput");
          //   filter = input.value.toUpperCase();
          //   table = document.getElementById("Table");
          //   tr = table.getElementsByTagName("tr");
          //   // 循环表格每一行，查找匹配项
          //   for (i = 0; i < tr.length; i++) {
          //     td = tr[i].getElementsByTagName("td")[0];
          //     if (td) {
          //       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          //         tr[i].style.display = "";
          //       } else {
          //         tr[i].style.display = "none";
          //       }
          //     }
          //   }
          // }
        }

    }
</script>

<style scoped>

</style>