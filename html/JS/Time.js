function transforma_tempo(tempo){var resto_segundos=tempo%60;tempo-=resto_segundos;tempo/=60;var resto_minutos=tempo%60;tempo-=resto_minutos;tempo/=60;resto_horas=tempo%24;tempo-=resto_horas;tempo/=24;string_tempo="";if(tempo>1){string_tempo+=tempo+" dias "}else if(tempo==1){string_tempo+=tempo+" dia "}if(resto_horas<10){string_tempo+="0";string_tempo+=resto_horas}else{string_tempo+=resto_horas}string_tempo+=":";if(resto_minutos<10){string_tempo+="0";string_tempo+=resto_minutos}else{string_tempo+=resto_minutos}string_tempo+=":";if(resto_segundos<10){string_tempo+="0";string_tempo+=resto_segundos}else{string_tempo+=resto_segundos}return string_tempo}