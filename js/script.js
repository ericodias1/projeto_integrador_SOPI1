    function buscaMenu(acao){
    	switch (acao){
    		case 'quiz':
    			$("#conteudo").load("pages/quiz.html");
    		break;
    		case 'historia':
    			$("#conteudo").load("pages/historia.html");
    		break;
    		case 'caracteristicas':
    			$("#conteudo").load("pages/caracteristicas.html");
    		break;
    		case 'estruturaDoSistema':
    			$("#conteudo").load("pages/estruturaSistema.html");
    		break;
    		case 'sistemaDeArquivos':
    			$("#conteudo").load("pages/sistemaArquivos.html");
    		break;
    		case 'tiposSistemaArquivos':
    			$("#conteudo").load("pages/tiposSistemaArquivos.html");
    		break;
    		case 'gerenciamentoDeMemoria':
    			$("#conteudo").load("pages/gerenciamentoMemoria.html");
    		break;
    		case 'gerenciamentoDeProcessos':
    			$("#conteudo").load("pages/gerenciamentoDeProcessos.html");
    		break;
    		case 'threads':
    			$("#conteudo").load("pages/processosThreads.html");
    		break;
    		case 'html':
    			$("#conteudo").load("pages/html.html");
    		break;
    		case 'css':
    			$("#conteudo").load("pages/css.html");
    		break;
    		case 'javascript':
    			$("#conteudo").load("pages/javascript.html");
    		break;
    		case 'pi1':
    			$("#conteudo").load("pages/pi1.html");
    		break;
    		case 'soAndroid':
    			$("#conteudo").load("pages/soAndroid.html");
    		break;
    		case 'introAndroid':
    			$("#conteudo").load("pages/introAndroid.html");
    		break;
    		case 'conclusao':
    			$("#conteudo").load("pages/conclusao.html");
    		break;
            case 'referencias':
                $("#conteudo").load("pages/referencias.html");
            break;
            case 'intEstudoCaso':
                $("#conteudo").load("pages/intEstudoCaso.html");
            break;
            case 'htmlEstudoCaso':
                $("#conteudo").load("pages/htmlEstudoCaso.html");
            break;
            case 'cssEstudoCaso':
                $("#conteudo").load("pages/cssEstudoCaso.html");
            break;
            case 'javascriptEstudoCaso':
                $("#conteudo").load("pages/javascriptEstudoCaso.html");
            break;
    	}
    	event.preventDefault();
    }	

  	var a='';
	function enviarQuiz(){
		var p = new Array();
		var r = new Array();
		var r_user = new Array();
        var pontos=0;
        var text_pontos;
		p[1] = '1. Qual o membro mais famoso da OHA(Open Handset Alliance)?';
		r[1] = 'C) Google';
		p[2] = '2. O Android roda sobre qual Kernel?';
		r[2] = 'B) Linux';
		p[3] = '3. No Android, como se chama a thread que trabalha como um "índice"?';
		r[3] = 'C) UI Thread';
		p[4] = '4. O HTML é uma linguagem de:';
		r[4] = 'A) Marcação';
		p[5] = '5. As instruções HTML chamam-se:';
		r[5] = 'D) Tags';
		p[6] = '6. O CSS deve ser usado junto ao:';
		r[6] = 'C) HTML';
		p[7] = '7. Qual seletor tem mais prioridade no CSS:';
		r[7] = 'D) Id';
		p[8] = '8. Qual tag serve para mudar a cor de fundo de um elemento:';
		r[8] = 'B) Background';
		p[9] = '9. No javascript a instrução return (variável); retorna:';
		r[9] = 'A) O valor da variável';
		p[10] = '10. Uma variavel javascript que contem o valor "10"(string), pode ser atribuido ao valor "true" (booleano)?:';
		r[10] = 'A) Sim';

		for(i=1;i<=10;i++){
			$('input:radio[name=p' + i + ']').each(function() {
		        if ($(this).is(':checked'))
		            r_user[i] = $(this).val();
	   		});
		}
		for(i=1;i<=10;i++)
			if(r_user[i]==r[i]){
				a+='<br>' + p[i] + '<br><br><span class="alerta alert alert-success">' + r[i] + '</span><br>';
                pontos++;
            }
			else
				a+='<br>' + p[i] + '<br><br><span class="alerta alert alert-success">' + r[i] + '</span><br><br><span class="alerta alert alert-danger">' + r_user[i] + '</span><br>';
        var user = $('[name=nome]').val();
        text_pontos = user + ', você fez ' + pontos + ' pontos.<br>';
        a = text_pontos + a;
		$("#conteudo").html(a);
		event.preventDefault();
	}