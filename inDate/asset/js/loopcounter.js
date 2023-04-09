jQuery(document).ready(function($){
	window.loopcounter = function( idWarp ) {
		if(typeof idWarp!= 'undefined'){
			var date = $('.'+idWarp).data('date');

			
			
			var start = new Date( date ),
			    now   = new Date(),
			    diff  = new Date( now - start ),
			    time  = diff/1000/60/60/24 + 1;

				var day = parseInt(time);
				var hour = now.getHours();
				var min = now.getMinutes();
				var sec = now.getSeconds();
				
				counterDate(idWarp,day,hour,min,sec);

				var interval = setInterval(function () {
					if( sec==60 ){
						min++;
						sec = 0;
					}
					if(min == 59 && sec == 60 && hour!=24 ){
						hour++;
						min = 0;
						sec = 0;
					}
					if(min == 59 && sec == 60 && hour == 24){
						day++;
						hour = 0;
						min = 0;
						sec = 0;
					}else{
						sec++;
					}
					counterDate(idWarp,day,hour,min,sec);
				}, 1000 );

			function counterDate(id,day,hour,min,sec){
				if (time < 0) { day = hour = min = sec = 0; }
				$( '.'+id+' .counter-days').html( counterDoubleDigit(day) );
				$( '.'+id+' .counter-hours').html( counterDoubleDigit(hour) );
				$( '.'+id+' .counter-minutes').html( counterDoubleDigit(min) );
				$( '.'+id+' .counter-seconds').html( counterDoubleDigit(sec) );
			}
			function counterDoubleDigit( arg ){
				if( arg.toString().length <= 1 ){
					arg = ('0' + arg).slice(-2);
				}
				return arg;
			}
		}
    }
	//loopcounter( 'counter-id' );
});