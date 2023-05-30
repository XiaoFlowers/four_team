<template>
    <div class="order">
        <!-- <h1>订单信息</h1> -->
        <div class="head">
            <div class="types heads">
                <text>付款类型:</text>
                <el-select v-model="value" placeholder="请选择" class="el-select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="num heads">
                <text>订单编号:</text>
                <el-input v-model="input" placeholder="请输入订单编号" class="nums"></el-input>
            </div>
            <div class="heads">
                <el-row>
                    <el-button type="primary" @click="query" class="query">查询</el-button>
                </el-row>
            </div>
        </div>
        <div class="main">
            <el-table :data="tableData" border style="width: 100%" height="80%">
                <el-table-column fixed prop="sort" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="number" label="订单编号" width="120">
                </el-table-column>
                <el-table-column prop="allpic" label="订单总价" width="120">
                </el-table-column>
                <el-table-column prop="shopname" label="商品名称" width="120">
                </el-table-column>
                <el-table-column prop="shoppic" label="商品价格" width="120">
                </el-table-column>
                <el-table-column prop="type" label="交易状态" width="120">
                </el-table-column>
                <el-table-column prop="people" label="收货人" width="120">
                </el-table-column>
                <el-table-column prop="date" label="下单日期" width="120">
                </el-table-column>
                <el-table-column prop="address" label="收货地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="footer">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="20">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '已付款'
            }, {
                value: '选项2',
                label: '未付款'
            }],
            tableData: [{
                sort: '1',
                number: '37812638',
                allpic: '6732',
                shopname: '国产',
                shoppic: '234',
                type: '已付款',
                people: '老王',
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            },{
                sort: '2',
                number: '37812638',
                allpic: '6732',
                shopname: '国产',
                shoppic: '234',
                type: '已付款',
                people: '老王',
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            value: ''
        }
    }
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.head {
    width: 100%;
    height: 50px;
    background: skyblue;
    display: flex;
}

.heads {
    width: 35%;
    height: 100%;
    line-height: 50px;
}

.heads text {
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
}

.el-select,
.nums {
    width: 60%;
}

.query {
    display: inline-block;
    width: 60px;
    height: 30px;
    margin-top: 10px;
}

.main {
    width: 100%;
}
.footer{
    position:fixed;
    bottom:0px;
    left:48%;
}
</style>