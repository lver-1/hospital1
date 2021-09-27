<template>
  <el-table
      :data="medicine.filter(data => !search || data.medicineName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
    <el-table-column
        label="medicineId"
        prop="medicineId">
    </el-table-column>
    <el-table-column
        label="medicineName"
        prop="medicineName">
    </el-table-column>
    <el-table-column
        align="right">
      <template slot="header" slot-scope="scope">
        <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "test",
  created(){
    let _this = this
    axios.get('http://localhost:8989/hospital/medicine/list/0').then(function (resp) {
      _this.medicine = resp.data
    })

  },
  data(){
    return {
      medicine: {
        medicineName: "",
        medicineFactory: "",//厂家
        medicineNo: "",//批号
        medicineSpecification: "",//规格
        medicineType: "",//类型
        medicineUnit: "",//单位
        medicineUsage: "",//用法
        medicineExpire: "",//失效日期
        medicineClassification: "",//分类
        medicineDisable: 0,//是否上架
        medicineRepertory: 0,//库存
        medicinePrice: ""
      },
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

  },
}
</script>
<table id="example1" class="table table-striped table-bordered dataTable dtr-inline collapsed" role="grid" aria-describedby="example1_info" style="width: 1093px;">
<thead>
<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 198px;" aria-sort="ascending" aria-label="Name: activate to sort column descending">Name</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 290px;" aria-label="Position: activate to sort column ascending">Position</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 147px;" aria-label="Office: activate to sort column ascending">Office</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 54px; display: none;" aria-label="Age: activate to sort column ascending">Age</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 128px; display: none;" aria-label="Start date: activate to sort column ascending">Start date</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 120px; display: none;" aria-label="Salary: activate to sort column ascending">Salary</th></tr>
</thead>
<tbody>

<tr role="row" class="odd">
  <td tabindex="0" class="sorting_1">Airi Satou</td>
  <td>Accountant</td>
  <td>Tokyo</td>
  <td style="display: none;">33</td>
  <td style="display: none;">2008/11/28</td>
  <td style="display: none;">$162,700</td>
</tr><tr role="row" class="even">
  <td class="sorting_1" tabindex="0">Angelica Ramos</td>
  <td>Chief Executive Officer (CEO)</td>
  <td>London</td>
  <td style="display: none;">47</td>
  <td style="display: none;">2009/10/09</td>
  <td style="display: none;">$1,200,000</td>
</tr><tr role="row" class="odd">
  <td tabindex="0" class="sorting_1">Ashton Cox</td>
  <td>Junior Technical Author</td>
  <td>San Francisco</td>
  <td style="display: none;">66</td>
  <td style="display: none;">2009/01/12</td>
  <td style="display: none;">$86,000</td>
</tr><tr role="row" class="even">
  <td class="sorting_1" tabindex="0">Bradley Greer</td>
  <td>Software Engineer</td>
  <td>London</td>
  <td style="display: none;">41</td>
  <td style="display: none;">2012/10/13</td>
  <td style="display: none;">$132,000</td>
</tr><tr role="row" class="odd">
  <td class="sorting_1" tabindex="0">Brenden Wagner</td>
  <td>Software Engineer</td>
  <td>San Francisco</td>
  <td style="display: none;">28</td>
  <td style="display: none;">2011/06/07</td>
  <td style="display: none;">$206,850</td>
</tr><tr role="row" class="even">
  <td tabindex="0" class="sorting_1">Brielle Williamson</td>
  <td>Integration Specialist</td>
  <td>New York</td>
  <td style="display: none;">61</td>
  <td style="display: none;">2012/12/02</td>
  <td style="display: none;">$372,000</td>
</tr><tr role="row" class="odd">
  <td class="sorting_1" tabindex="0">Bruno Nash</td>
  <td>Software Engineer</td>
  <td>London</td>
  <td style="display: none;">38</td>
  <td style="display: none;">2011/05/03</td>
  <td style="display: none;">$163,500</td>
</tr><tr role="row" class="even">
  <td class="sorting_1" tabindex="0">Caesar Vance</td>
  <td>Pre-Sales Support</td>
  <td>New York</td>
  <td style="display: none;">21</td>
  <td style="display: none;">2011/12/12</td>
  <td style="display: none;">$106,450</td>
</tr><tr role="row" class="odd">
  <td class="sorting_1" tabindex="0">Cara Stevens</td>
  <td>Sales Assistant</td>
  <td>New York</td>
  <td style="display: none;">46</td>
  <td style="display: none;">2011/12/06</td>
  <td style="display: none;">$145,600</td>
</tr><tr role="row" class="even">
  <td tabindex="0" class="sorting_1">Cedric Kelly</td>
  <td>Senior Javascript Developer</td>
  <td>Edinburgh</td>
  <td style="display: none;">22</td>
  <td style="display: none;">2012/03/29</td>
  <td style="display: none;">$433,060</td>
</tr></tbody>
<tfoot>
<tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1" style="display: none;">Age</th><th rowspan="1" colspan="1" style="display: none;">Start date</th><th rowspan="1" colspan="1" style="display: none;">Salary</th></tr>
</tfoot>
</table>