angular.module('KanbanApp',[])
    .controller('KanbanController', function($scope){ //scope es el que interactua con la vista
        var KanbanCtrl = this; 
        KanbanCtrl.tasks = []; //alcance es local y accedemos desde la instancia
        var index = 0;

        KanbanCtrl.addTask = function(){
            var taskTemp = {
                index: index,
                name: $scope.newObj.name,
                description: $scope.newObj.description,
                status: 1
            }
            KanbanCtrl.tasks.push(taskTemp);
            index += 1;
            //console.log($scope.newObj);
            //console.log(taskTemp);
            $scope.newObj = {}; //inicializa los valores
        }

        KanbanCtrl.updateStatus = function(stat){
            for (let i = 0; i < KanbanCtrl.tasks.length; i++) {
                if(KanbanCtrl.tasks[i].index == stat){
                    KanbanCtrl.tasks[i].status++;
                };
            };
        }
        KanbanCtrl.updateToPrev = function(stat){
            for(let i = 0; i < KanbanCtrl.tasks.length; i++){
                if(KanbanCtrl.tasks[i].index == stat){
                    KanbanCtrl.tasks[i].status--;
                };
            };
        }
        
    });