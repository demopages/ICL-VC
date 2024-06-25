import fire
import os
import shutil


basic_vc_reference = ['908_31957_000003_000001', '1320_122617_000029_000001', '1580_141083_000001_000002', '4507_16021_000021_000003', '4992_41797_000004_000002', '6829_68771_000009_000000', '7021_79730_000044_000001', '8224_274384_000001_000000']
basic_vc_source = ['8463_294828_000013_000000', '4970_29093_000002_000000', '7021_85628_000002_000000', '8555_292519_000003_000000', '260_123286_000005_000000', '4970_29093_000002_000000', '1188_133604_000004_000005', '1188_133604_000004_000005']


prosody_vc_reference = ['8224_274384_000001_000000', '7021_79730_000044_000001', '1320_122617_000029_000001', '6829_68771_000009_000000',
                        '7021_79730_000044_000001', '8224_274384_000001_000000', '1320_122617_000029_000001', '1580_141083_000001_000002',
                        '4992_41797_000004_000002', '1580_141083_000001_000002', '6829_68771_000009_000000', '1320_122617_000029_000001']
prosody_vc_source = ['0015_000698', '0015_001048', '0015_001398', '0015_001748',
                     '0012_000697', '0012_001023', '0012_001287', '0012_001470',
                     '0016_000368', '0016_000764', '0016_001396', '0016_001492']


def main(ori_dir, new_dir, data_type='basic'):
    if data_type == 'basic':
        reference_names = basic_vc_reference
        source_names = basic_vc_source
    else:
        reference_names = prosody_vc_reference
        source_names = prosody_vc_source

    for reference_name, source_name in zip(reference_names, source_names):
        ori_path = os.path.join(ori_dir, reference_name, source_name + '.wav')
        os.makedirs(os.path.join(new_dir, reference_name), exist_ok=True)
        new_path = os.path.join(new_dir, reference_name, source_name + '.wav')
        shutil.copyfile(ori_path, new_path)


if __name__ == "__main__":
    fire.Fire(main)
