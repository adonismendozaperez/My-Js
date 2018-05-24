$(document).ready(init);

function init(){
    $("#tbClipboard").val('Copy to Clipboard API');
    
    $("#btCopy").click(function(){
        $("#tbClipboard").focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
    });
}