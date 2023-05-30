<template>
    <!-- 主体 -->
    <div class="Commodity-list">
        <!-- 商品查询 -->
        <div class="query">
            <div class="query-bianhao">
                商品编号：<input type="text" placeholder="请输入商品编号">
                <button>查询</button>
            </div>

        </div>
        <!-- 商品的一系列操作 -->
        <div class="delete">
            <button>删除</button>
        </div>
        <div class="container">
            <!-- <h2>商品管理系统</h2> -->
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" v-model="select_all"></th>
                        <th>商品编号</th>
                        <th>商品名称</th>
                        <th>颜色</th>
                        <th>尺寸</th>
                        <th>现价</th>
                        <th>原价</th>
                        <th>图片</th>
                        <th>备注</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" v-model="select_all"></td>
                        <td>111111</td>
                        <td>样式商品</td>
                        <td>颜色</td>
                        <td>尺寸</td>
                        <td>现价</td>
                        <td>原价</td>
                        <td><img src="https://img2.baidu.com/it/u=3559234409,4191579317&fm=253&fmt=auto&app=138&f=PNG?w=1068&h=500"
                                alt="" width="60" height="60"></td>
                        <td>阿覅耦合剂哦啊伪皇宫爱国就阿覅耦合剂哦啊伪皇宫爱国就</td>
                        <td>在货</td>
                        <td @click="sc">删除</td>
                    </tr>
                    <tr v-for="(item, index) in 2">
                        <td><input type="checkbox" v-model="select_all"></td>
                        <td>111111</td>
                        <td>样式商品2</td>
                        <td>颜色</td>
                        <td>尺寸</td>
                        <td>现价</td>
                        <td>原价</td>
                        <td><img src="https://img2.baidu.com/it/u=3559234409,4191579317&fm=253&fmt=auto&app=138&f=PNG?w=1068&h=500"
                                alt="" width="60" height="60"></td>
                        <td>阿覅耦合剂哦啊伪皇宫爱国就阿覅耦合剂哦啊伪皇宫爱国就</td>
                        <td>在货</td>
                        <td>删除</td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>
</template>
<script sutop>
import { ref, reactive } from 'vue'
let xx = ref()
function sc() {

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.Commodity-list {
    width: 100%;
    height: 100%;
    /* background-color: aqua; */

}

/* 查询 */
.query-bianhao {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: orange;
    text-align: end;
}

.query-bianhao>button {
    width: 120px;
    height: 30px;
    font-size: 12px;
    background-color: #409eff;
    margin-left: 10px;

}

/* 一系列操作 */
.delete {
    width: 100%;
    margin-top: 20px;
    text-align: end;
}

.delete>button {
    width: 120px;
    height: 30px;
    font-size: 12px;
    background-color: #409eff;
    margin-left: 10px;
}

/* 商品内容的的样式 */

.container {
    margin: 20px;
}

h2 {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th,
td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}

thead th {
    background-color: #f2f2f2;
}

input[type=checkbox] {
    vertical-align: middle;
}

img {
    display: block;
    margin: 0 auto;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

button {
    border: none;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

.primary {
    background-color: #409eff;
    color: #fff;
}

.success {
    background-color: #67c23a;
    color: #fff;
}
</style>
