function a20_0x4017(){const _0x4669e1=['push','close','onmessage','settings','7945530rvSrbq','isFinal','shift','stringify','8547040lelFkJ','201729kRVClM','4048815tWNJbh','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/','onopen','charAt','readyState','audio','indexOf','33122367bbXPpr','wss://api.elevenlabs.io/v1/text-to-speech/','/stream-input?model_id=','10OgjikZ','1333549tGyesb','76wHjQDV','4sEhAqj','onerror','eleven_multilingual_v2','132417miSISa','voice_id','length','voice','elevenLabsApiKey'];a20_0x4017=function(){return _0x4669e1;};return a20_0x4017();}const a20_0x55e986=a20_0x2414;(function(_0x5a6a57,_0x1b3994){const _0x3dd008=a20_0x2414,_0x16a5fb=_0x5a6a57();while(!![]){try{const _0x204809=-parseInt(_0x3dd008(0x7d))/0x1*(-parseInt(_0x3dd008(0x7a))/0x2)+-parseInt(_0x3dd008(0x8b))/0x3*(-parseInt(_0x3dd008(0x79))/0x4)+parseInt(_0x3dd008(0x8c))/0x5+parseInt(_0x3dd008(0x86))/0x6+-parseInt(_0x3dd008(0x78))/0x7+parseInt(_0x3dd008(0x8a))/0x8+-parseInt(_0x3dd008(0x74))/0x9*(parseInt(_0x3dd008(0x77))/0xa);if(_0x204809===_0x1b3994)break;else _0x16a5fb['push'](_0x16a5fb['shift']());}catch(_0x237a2f){_0x16a5fb['push'](_0x16a5fb['shift']());}}}(a20_0x4017,0xd565f));function textChunker(_0x5d6c24){const _0x1a9191=a20_0x2414;let _0x1f308e='',_0x3bcd3a=[];for(const _0x560bc8 of _0x5d6c24){let _0x59576d=(_0x1f308e+_0x560bc8)['split'](/([.,?!;:—\-()\[\]{} ])/);while(_0x59576d[_0x1a9191(0x7f)]>0x1)_0x3bcd3a[_0x1a9191(0x82)](_0x59576d[_0x1a9191(0x88)]()+(_0x59576d[_0x1a9191(0x88)]()||'')+'\x20');_0x1f308e=_0x59576d[0x0]||'';}if(_0x1f308e)_0x3bcd3a[_0x1a9191(0x82)](_0x1f308e+'\x20');return _0x3bcd3a;}let websocket,stream,audioUrl;var abortController;function a20_0x2414(_0x4c28b5,_0x5e38cc){const _0x4017d2=a20_0x4017();return a20_0x2414=function(_0x2414d1,_0x3c77c7){_0x2414d1=_0x2414d1-0x74;let _0x438d64=_0x4017d2[_0x2414d1];return _0x438d64;},a20_0x2414(_0x4c28b5,_0x5e38cc);}async function LabsConnect(){const _0x4635ff=a20_0x2414;let _0x47506f=arguments[_0x4635ff(0x7f)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:bs[_0x4635ff(0x80)][_0x4635ff(0x7e)],_0x42290d=arguments[_0x4635ff(0x7f)]>0x1&&arguments[0x1]!==undefined?arguments[0x1]:_0x4635ff(0x7c),_0x1e5c2b=arguments[_0x4635ff(0x7f)]>0x2&&arguments[0x2]!==undefined?arguments[0x2]:bs[_0x4635ff(0x85)][_0x4635ff(0x81)]||bs[_0x4635ff(0x81)],_0xc675b8=arguments[_0x4635ff(0x7f)]>0x3&&arguments[0x3]!==undefined?arguments[0x3]:null;const _0xb5bc1c=JSON[_0x4635ff(0x89)]({'text':'\x20',..._0x1e5c2b?{'xi-api-key':_0x1e5c2b}:{},'try_trigger_generation':!![],'voice_settings':_0xc675b8,'generation_config':{'chunk_length_schedule':[0x32]}});if(websocket&&websocket[_0x4635ff(0x90)]<=0x1)websocket?.[_0x4635ff(0x83)]();{websocket=new WebSocket(_0x4635ff(0x75)+_0x47506f+_0x4635ff(0x76)+_0x42290d),await new Promise((_0x54b423,_0x55325a)=>{const _0x3ceddc=_0x4635ff;websocket[_0x3ceddc(0x8e)]=_0x54b423,websocket[_0x3ceddc(0x7b)]=_0x55325a;}),stream=new ReadableStream({'start'(_0x614c63){const _0x3d8197=_0x4635ff;websocket[_0x3d8197(0x84)]=async _0x9beeaa=>{const _0x24e19a=_0x3d8197,_0x5a4f02=JSON['parse'](_0x9beeaa['data']);if(_0x5a4f02[_0x24e19a(0x87)])_0x614c63[_0x24e19a(0x83)]();if(_0x5a4f02[_0x24e19a(0x91)]){let _0x4fb728=base64ToUint8Array(_0x5a4f02[_0x24e19a(0x91)]);_0x614c63['enqueue'](_0x4fb728);}};},'cancel'(){const _0x4d482a=_0x4635ff;websocket[_0x4d482a(0x83)]();}}),websocket['send'](_0xb5bc1c),audioUrl=await streamToAudio(stream);}return audioUrl;}function generateStreamInputTTS(_0x5aafcf){const _0x3390d5=a20_0x2414;websocket['send'](JSON[_0x3390d5(0x89)]({'text':!_0x5aafcf?_0x5aafcf:_0x5aafcf['trim']()+'\x20','try_trigger_generation':!![]}));}const BASE64_CHARS=a20_0x55e986(0x8d);function base64CharToValue(_0x44098b){const _0x2fc2a2=a20_0x55e986;return BASE64_CHARS[_0x2fc2a2(0x92)](_0x44098b);}function base64ToUint8Array(_0x38e01b){const _0x556eab=a20_0x55e986,_0x284de2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';let _0xa361a0=_0x38e01b[_0x556eab(0x8f)](_0x38e01b[_0x556eab(0x7f)]-0x2)==='='?0x2:_0x38e01b[_0x556eab(0x8f)](_0x38e01b['length']-0x1)==='='?0x1:0x0;const _0x54cbc4=new Uint8Array(_0x38e01b['length']/0x4*0x3-_0xa361a0);for(let _0x47dfdc=0x0,_0x52612c=0x0;_0x47dfdc<_0x38e01b[_0x556eab(0x7f)];_0x47dfdc+=0x4,_0x52612c+=0x3){const _0x5340ef=_0x284de2[_0x556eab(0x92)](_0x38e01b[_0x47dfdc]),_0x4ca46b=_0x284de2['indexOf'](_0x38e01b[_0x47dfdc+0x1]),_0x3a79f9=_0x284de2[_0x556eab(0x92)](_0x38e01b[_0x47dfdc+0x2]),_0x377c5e=_0x284de2[_0x556eab(0x92)](_0x38e01b[_0x47dfdc+0x3]),_0x70c91b=_0x5340ef<<0x12|_0x4ca46b<<0xc|_0x3a79f9<<0x6|_0x377c5e;_0x54cbc4[_0x52612c]=_0x70c91b>>0x10&0xff;if(_0x52612c+0x1<_0x54cbc4[_0x556eab(0x7f)])_0x54cbc4[_0x52612c+0x1]=_0x70c91b>>0x8&0xff;if(_0x52612c+0x2<_0x54cbc4[_0x556eab(0x7f)])_0x54cbc4[_0x52612c+0x2]=_0x70c91b&0xff;}return _0x54cbc4;}