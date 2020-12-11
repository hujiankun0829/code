/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

    


$(function(){
    const localid = []
    $('#title').keypress( function (e) {
        e= e || event
        var currKey=0
        currKey=e.keyCode||e.which||e.charCode
        e.preventDefault()
        // 拿到文本框输入内容
        // trim() 去除首尾空格
        const value = this.value.trim()
        localid.push(value)
        console.log(value, currKey)
        if (currKey === 13) {
            
            bindHtml()
            delInput()
            todocount()
            donecount()
            window.localStorage.setItem('localid', JSON.stringify(localid))
        }
            
    })
    $('.demo-box').on('click','a', function () {
        const value = $(this).prev().text()
        console.log(localid.length)
        for(var i = 0; i < localid.length; i++){
            if(localid[i] == value){
                localid.splice(value, 1)
                window.localStorage.setItem('localid', JSON.stringify(localid))
            }
        }
        $(this).parent().remove()
        // todocount()

    })
    $('#donelist').on('click','a', function () {
        $(this).parent().remove()
        donecount()
    })
    $('#todolist').on('click', 'input', function() {
        const inp = $(this).parent()[0]
        $('#donelist').append(inp)
        todocount()
        donecount()

    })
    $('#donelist').on('click', 'input', function() {
        const dinp = $(this).parent()[0]
        $('#todolist').append(dinp)
        todocount()
        donecount()
    })
    
    
     
        
        
        const localdata = JSON.parse(window.localStorage.getItem('localid')) || []
        console.log(localdata)
        if(localdata.length){
            bindFirst()
        }
        function bindFirst() {
            localdata.forEach(item => {
                let str = `
                <li>
                <input type="checkbox" />
                <p onclick="edit(4)">${item}</p>
                <a href="javascript:remove(4)">-</a>
                </li>
                `  
                $('.demo-box').append(str)
            })
            
        }
        function bindHtml(){
            let str = `
            <li>
            <input type="checkbox" />
            <p onclick="edit(4)">${$('#title').val()}</p>
            <a href="javascript:remove(4)">-</a>
            </li>
            `  
            $('.demo-box').append(str)
        }
        todocount()
        function todocount( ){
            const spanval = $('#todolist > li').length
            $('#todocount').html(spanval)
            console.log(spanval)
        }
        donecount()
        function donecount() {
            const spanval = $('#donelist > li').length
            $('#donecount').html(spanval)
            console.log(spanval)
        }
        function delInput () {
            $('#title').val("")
        }

        
})
    
    
       
    

















