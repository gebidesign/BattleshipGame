var ShipGame = (function(){

    var _boardEl,
    // letters for board cells
        _lettersArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'],
        _boardLettersArr,
        _shipLocationsArr = ['a0', 'a1', 'a2'],
        _options = {
            boardSize : 7 // default size
        };

    var _setOptions = function(options){

        if(options){
            _options = options;
        }
    };
    var _createBoard = function(opts){

        // new letter array based on board size
        _boardLettersArr = _lettersArr.splice(0, _options.boardSize);

        // create board div to hold all the cells
        _boardEl = document.createElement('div');
        _boardEl.setAttribute('id', 'board');

        for (var i=0; i < _options.boardSize; i++){

            for (var j=0; j < _options.boardSize; j++){

                var cell = document.createElement('span');
                var cellText = document.createTextNode(_boardLettersArr[i]+(j+1));
                cell.dataset.cellid = _boardLettersArr[i]+j;
                cell.className = 'cell';
                cell.appendChild(cellText);

                _boardEl.appendChild(cell);

                //boardArr.push(boardLettersArr[i]+j);

            }
            // start a new row on the board
            _boardEl.appendChild(document.createElement('br'));
        }

        // add the board to body
        document.body.appendChild(_boardEl);

        console.log(_boardLettersArr);
    };

    var _fire = function(e){

        if(e.target.dataset.cellid){

            var targetid = e.target.dataset.cellid;

            if(_shipLocationsArr.indexOf(targetid) != -1){

                //sink the ship
                e.target.className += ' hit';

            } else {

                e.target.className += ' miss';
            }
        }
    };
    var init = function(opts){

        _setOptions(opts);
        _createBoard(_options);
        document.onclick = _fire;
        // todo: _randomizeShips();
    };

    return {
        init : init
    };

})();