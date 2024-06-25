function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generate_basic_vc(tableId, ref_names, source_names, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < ref_names.length) {
      cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML('zeros_shot_voice_conversion/reference/'+ref_names[i]+'.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('zeros_shot_voice_conversion/source/'+source_names[i]+'.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('zeros_shot_voice_conversion/YourTTS/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('zeros_shot_voice_conversion/RefXVC/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML('zeros_shot_voice_conversion/ICL_VC/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generate_prosody_vc(tableId, ref_names, source_names, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < ref_names.length) {
      cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/reference/'+ref_names[i]+'.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/source/'+source_names[i]+'.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/YourTTS/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/RefXVC/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/ICL_VC/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/ICL_VC_pitch/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML('vc_prosody_preserve/ICL_VC_emo/'+ref_names[i]+'/'+source_names[i] + '.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}





basic_vc_reference = ['908_31957_000003_000001', '1320_122617_000029_000001', '1580_141083_000001_000002', '4507_16021_000021_000003', '4992_41797_000004_000002', '6829_68771_000009_000000', '7021_79730_000044_000001', '8224_274384_000001_000000']
basic_vc_source = ['8463_294828_000013_000000', '4970_29093_000002_000000', '7021_85628_000002_000000', '8555_292519_000003_000000', '260_123286_000005_000000', '4970_29093_000002_000000', '1188_133604_000004_000005', '1188_133604_000004_000005']


prosody_vc_reference = ['8224_274384_000001_000000', '7021_79730_000044_000001', '1320_122617_000029_000001', '6829_68771_000009_000000',
                        '7021_79730_000044_000001', '8224_274384_000001_000000', '1320_122617_000029_000001', '1580_141083_000001_000002',
                        '4992_41797_000004_000002', '1580_141083_000001_000002', '6829_68771_000009_000000', '1320_122617_000029_000001']
prosody_vc_source = ['0015_000698', '0015_001048', '0015_001398', '0015_001748',
                     '0012_000697', '0012_001023', '0012_001287', '0012_001470',
                     '0016_000368', '0016_000764', '0016_001396', '0016_001492']


generate_basic_vc('basic_vc', basic_vc_reference, basic_vc_source, 1);
generate_prosody_vc('prosody_vc', prosody_vc_reference, prosody_vc_source, 1);


$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#basic_vc-' + i;
    $(id).click(function() {
      generate_basic_vc(
          'basic_vc',
          basic_vc_reference, basic_vc_source, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});


$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#prosody_vc-' + i;
    $(id).click(function() {
      generate_prosody_vc(
          'prosody_vc',
          prosody_vc_reference, prosody_vc_source, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

