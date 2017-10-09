$(document).ready(function () {
    $("#createEmployee").click(function () {
        $("#createEmployeeForm").animate({
            height: 'toggle'
        })
    })

    $("#createTask").click(function () {
        $("#createTaskForm").animate({
            height: 'toggle'
        })
    })

    $("#archive-image").droppable({ drop: Archive });

    function Archive(event, ui) {
        var draggableId = ui.draggable.attr("id");
        let task = container.database.tasks.find(x => (x.taskName == `${draggableId}`))
        task.taskStatus = "Archived";
        ui.draggable.appendTo(`#archive`)
        //$("#archive div").css("display", "none");
    }

    $(`#archive-image`).click(function() {
        $("#archive div").animate({
           height: 'toggle'
        })
    })
})
