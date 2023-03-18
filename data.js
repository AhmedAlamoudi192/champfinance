const parsedData = [{
    companyName: 'Jabal Omar Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLVKqBVPk-RLocisgaPACPpVOo//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4250',
    companyRef: 4250
  },
  {
    companyName: 'MEFIC REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoWKOhWI9QvhEqM0MUUTZAEKEPV8O8lOmkUve2S5728OSRQgkQtr0UudaFqWXZ7KsjBpgTw3IWQ-dgD7o-nfOaxEawstH8FEEd2B6LAXMMWGBAk_snDl6HwOy9eiRswAnxDeYgdGyDG7-BDxQfo69DbgjloiURequz5sLPWzcQAA7Q8ydulNLoDR1U1sm7jtspUhyzTIqipdgkUi6FI6eAOQKQCRw!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4346',
    companyRef: 4346
  },
  {
    companyName: 'Dar Alarkan Real Estate Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpfNbOSKeXqUmks4mxwARfCyv89w21Ksq6uwvfuRwu4SQmvBLXPBNtXleikHvCjYNuG6BzCz5zqYPQHU_DmcNGWGlk_woQBboEgaeusQWDQfg_eXwZG7_z_JVYHjMQbuzQp6YORPQdfKj4AH0delswkywJz4o6fT7s3LbNRIGCVpzE7VIo8sCxLhtRdVFXprVEmgqQptzFyBdDntiDO5WKvDU!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4300',
    companyRef: 4300
  },
  {
    companyName: 'Abdullah Al Othaim Markets Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxx8lU7I51epiaRzibGAhN8Lazw3zfUqijr7i5853K4hJOY8Epc80y0eV2JQu4JNw66bYDOLfjMpQ5CdzwNZw5TsdLI_hUgCnQJAm-0xhYMBuH_5PFlbPzO81diecxAuLFDn5o6ENF38KHiA_R16G3BTLIkPCvq9Pmwc9s2EwUKWnESt0uhyAPHumxE1UVdmdYSaYBKmnIXI18MeWIP7hHfe4E!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4001',
    companyRef: 4001
  },
  {
    companyName: 'Filing and Packing Materials Manufacturing Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRFUTpMr3IdLlUERs8AB51KHa//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2180',
    companyRef: 2180
  },
  {
    companyName: 'Saudi Investment Bank',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxR81E7I51eppNEOpsYC0xQx4UV_vukVkVZd3fhO5fDJZzEhFfimmeiyWUlim5PuHkwHBPa3EZAPc0F88ZTNnOpitWI7F8BotDoQOjra2xBYRL-Tx5fxsHvPH8ltk9NsI3DAs0ygEh7Bx8qPkBfh94W1CJLwrNCps-HnZumnihQ0IiTuF0KpTtwlGUtqjZqy1R2SIUOUpe7GPliyBNncAeSuKf5//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1030',
    companyRef: 1030
  },
  {
    companyName: 'Seera Group Holding',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczR8lE7I51epiaRzibGAhN8LabCf99QK6Osu7vwncvhEkZiwip-yzMu8rrihdwTZhx124C2sOBTV3MQupNZOHeoivWYHLoAUaBLEHijDXagMAj7J48vY-N3nnWJ5VED4dYOfc3UgUh7Bx8qPkFfh94W1CQrwrKiTl8PuwjRTBUoEPzM79dCkQdOddnwqo3aMq0lUi0VpCn3MfLlkCX24AFMljIi//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1810',
    companyRef: 1810
  },
  {
    companyName: 'Makkah Construction and Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxx8lU7I51epiaRzibGAhN8Lazw3zfUqijr7i5853K4hJOY8Epc80y0eV2JQu4JNw66bYDOLfjMpQ5CdzwNZw5TsdLI_hUgCnQJAm-0xhYMBuH_5PFlbPzO81diecxAuLFDn5o6ENF38KHiA_R16G3BTLIkPCvq9Pmwc9s2EwUKWnESt0uhyAPHumxE1UVdmdYSaSpAmnIXI18MeWIP7vavHLI!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4100',
    companyRef: 4100
  },
  {
    companyName: 'Bank Aljazira',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bpIKCVPk-RLociogNHnpjXEA!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1020',
    companyRef: 1020
  },
  {
    companyName: 'Saudi Arabia Refineries Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpzEftjHR6mU4S6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7ULB10YcJjDrXBncmMz202wnpMDl2AwNda4LvqBjsw6ET8k8eXsfA7L7rEdJkOvrW4Rw0NCOg7-FDxCfo69LZgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctolBBqnwfIl0ORWQNHhbjPao!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2030',
    companyRef: 2030
  },
  {
    companyName: 'Saudi Industrial Services Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxylc7I51eppNEOpsYC0zwtbDCf5_Uqijr7i5853K4RJCIiFJes1Q2WVXKvNtjoR80Wwedm_CZSx1w15rymcNUrMZk_woQBloHAm-0xhYMOhH_5PFlbPzOi1diekwH39jcp4YGhPQdfKj4AH0delswgyyJSPMqeT7s3DT1RIGCRp7k7ZIr3YFjVdSybMO2SKoOUdUCqYtdhGwxFLE9uAORD1pj//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2190',
    companyRef: 2190
  },
  {
    companyName: 'Zahrat Al Waha for Trading Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxJ81E7I51epiaRzibGAhPUcWGF_76hVkZZd3fhO5fDJYzEhFX8lme8yUXFC7knzDjqtgF1YcGnruogdCezcO7QEdZjcugCRIEuQeBpG-xAYRD2Tx5fxsbvPOsSy6MGwq0d-qqpA5H6Dj5UfIK-Dr0tqElWhGWFSF8PuzRNPVWgoOFnfr8WijxwEmXNqzZqy1RIpAEmqct9jHw5ZIk9eADs6CtZ//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3007',
    companyRef: 3007
  },
  {
    companyName: 'AYYAN Investment Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxx8lW7iXR6mZpEOpsYC0zwtbDCf5_Uqijr7i5853K4RJCIiFJes1Q2WVXKvNtjYRx0ZoDOLXjcoTYCZzwNZjZXsdLI_hUg9PUO-O5ojS04DCL-yePLMPzOi1diudxAsGGBR00dCOk7-FDxAfo69LbgJlkSkeZV8nzYuWnqiQIFjTzJ2yVXugPHqqhl2YZtkVQdoqoGUhe7CNliKGI2uAOdfVSf//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2140',
    companyRef: 2140
  },
  {
    companyName: 'Gulf Union Alahlia Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bZKoUpMr3IdLlUERs8AA2doKP//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8120',
    companyRef: 8120
  },
  {
    companyName: 'Saudi Arabian Amiantit Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxytHaGen0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh01k4EuDLjcphZ8ezLz5xZXsR6TQxcg8LQWeM5ogx04GBH_5PFlTPzOiy4xHM7gb03fpboGBPQdfKj4BH0deltwnayISLIyfj3sUtfVVIGCWp7l_Zop7YFTmVeyaIImj8sWUZWBVPk-RLocisgcPAAMzNI3//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2160',
    companyRef: 2160
  },
  {
    companyName: 'Saudi Arabia Refineries Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpzEftjHR6mU4S6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7ULB10YcJjDrXBncmMz202wnpMDl2AwNda4LvqBjsw6ET8k8eXsfA7L7rEdJkOvrW4Rw0NCOg7-FDxCfo69LZgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctolBBqnwfIl0ORWQNHhbjPao!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2030',
    companyRef: 2030
  },
  {
    companyName: 'Etihad Atheeb Telecommunication Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJfNXOSKeXqUmks4mxwAR1XFjhv2-olVHW3V34zuVwCSMxYRW_5RlvclHxQu4JM466bUBdWPCpqzoI3cksnDt0hLVGDl2AKNAlCLzxBjtQGIT9k8eXsfE7z7rE8qiBcGuHvmrqQKS-gw8Vn6CvQ28LapIVYVkh0tfDLk1TTxUoaPiZ36-FIg-cRFnzqo3aMhUSmdBA6nIfI18OWWIPHoAAksU!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7040',
    companyRef: 7040
  },
  {
    companyName: 'Saudi Advanced Industries Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRFUKUuX7EOlyKCI2eABvqa69//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2120',
    companyRef: 2120
  },
  {
    companyName: 'Bupa Arabia for Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bZFIVpMr3IdLlUERs8AC9qDe3//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8210',
    companyRef: 8210
  },
  {
    companyName: 'Arabian Shield Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDBBHRdW-O-TWhVl3d2F71wOlwgSEVHKa5bKOlOlzNs9FsZBZwbo3ILHHWojcMbTYGbzAVYjsn8FCH29Bb47XGMLDoOIf_L4Mgy_8-KVWC43EGxY4FFTB0L6Dj5UfICuDp0tuEmWRKS5Sp4PO9d1NdGgoZYnebvkWnvgqIpKlk3YFIlqkQUTpCp2EbJFX8SsdwcsWW0S//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8070',
    companyRef: 8070
  },
  {
    companyName: 'Alinma Bank',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRGrV2Rjq9TE0inU2MBSb4Wljhv2-olVHW3V34zuVwCScR4aW4ZalosqoUudxjrh-ppUNbmPCYo9kInMksmNtMxXpMDl2A0KcS-O5ogx0YdML_yePLWPid511iukxHsLUCTzMoEGrv4EPFJ-jr0NuCGWRFeJpXyethl6appwoUNOIs7tdckQdOVVGLsg3bIqkkUlUKUhf7CNlyyGNr8ADx_TV1//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1150',
    companyRef: 1150
  },
  {
    companyName: 'Al Abdullatif Industrial Investment Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpfNbOSKeX6SSRzibGAhN8Lazw3ye1Ksq6uwvfuRwuESQiopTXLJVNVpUy7_ZYGAfdNkDnFnzmUgfcHU_5zGEjrDSyfwUIA70DgaeusQWDQcQ_eXwZG7_z4pVYHjPANzb3qakDIX0HHyo-QF-H3hbMJEsi0rxKng87N009UaCgkSd5u-RKd-BYFbUs27AtkqpDVNVA6mIXIVsMRWwP7v5Y9Bg!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2340',
    companyRef: 2340
  },
  {
    companyName: 'Taleem REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoWKOhWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjI1hZaP8KIIlsDaLAXMMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjSzTNFFb71IoF0Oe0cEdN8WgWA!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4333',
    companyRef: 4333
  },
  {
    companyName: 'Derayah REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8zkt92MdPsy3STSvcRaYIK6HrbCf5_UyShrbgPPO7wMMEiA1fxW5FwWouZlt6fMPBquierCxpD4qofUd2Z07pEJrnU49AHGkdGBKNA2uEOCJrB_8vhlXPydZ31iB8REunVpqFoGYqy-gw8Vn2Cow2ALYsEKWF6K7PWwi5TNVEEFJT_z-7VUugMnUTW8buO2ykSHdE1zoKn2CRbLMUvd0QOsH5eK//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4339',
    companyRef: 4339
  },
  {
    companyName: 'Wafrah for Industry and Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRFWAVPk-RLociogNHv4YKBU!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2100',
    companyRef: 2100
  },
  {
    companyName: 'Arabian Cement Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxR81E7I51eppNEOpsYC0xQx4UV_vukVkVZd3fhO5fDJZzEhFfimmeiyWUlim5PuHkwHBPa3EZAPc0F88ZTNnOpitWI7F8BotDoQOjra2xBYRL-Tx5fxsHvPH8ltk9NsI3DAs0ygEh7Bx8qPkBfh94W1CJLwrNCps-HnZumnihQ0IiTuF0KpTtwlGUtqjZqy1R2SIcKUpe7GPliyBNncAfEmR2F//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3010',
    companyRef: 3010
  },
  {
    companyName: 'Theeb Rent a Car Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHpUKOhWI9QvhEqM0MUUTZAEKANq-Pc2OmkUve2S5728OSRQgkQtr0Uu20LVstR7KsjBpgTw3IWQ-dgD7o-nfOYxE1YW2r8CiCNbgygYrWELDAgS_-Thy1D4nRevxA0YAb6hPMSODRDjd_Ch4gP0dehtwRy0RCIvVfZ82Lltm4kBBrTyJG-X0tAHjqpqZN3FXZUpjSxMTNRUuwSKxVCkdHAHgC4hJA!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4261',
    companyRef: 4261
  },
  {
    companyName: 'Al Hammadi Holding',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJfNXOSKeXqUmks4mxwAR1XFjhv2-olVHW3V34zuVwCSMxYRW_5RlvclHxQu4JM466bUBdWPCpqzoI3cksnDt0hLVGDl2AKNAlCLzxBjtQGIT9k8eXsfE7z7rE8qiBcGuHvmrqQKS-gw8Vn6CvQ28LapIVYVkh0tfDLk1TTxUoaPiZ36-FIg-cRFnzqo3aMhUSaYBJ6nIfI18OWWIPHqeUuXk!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4007',
    companyRef: 4007
  },
  {
    companyName: 'Saudi Industrial Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxzEftJtLpZWoS6WxiLDDB18IK_31Sq6Ksu7vwncvhEkEiIkp5zVLZZFUp826PhXHQmQE6t-Bxh9oInPE0mNlcxWpE9q8Aoa93wHe1NbbgMIj4J48vw_A7L16J5XIDwYYFHjV1IKTv4EPFB-jr0NuCm2RJRJpXyfNh56apJwoUNPIkb5dc6Q4cq6KWZRu2RVJ1iKoaSF3sImSLoYjZ4A6HclUE//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2130',
    companyRef: 2130
  },
  {
    companyName: 'Qassim Cement Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpfNbOSKeXqUmks4mxwARfCyv89w21Ksq6uwvfuRwu4SQmvBLXPBNtXleikHvCjYNuG6BzCz5zqYPQHU_DmcNGWGlk_woQBboEgaeusQWDQfg_eXwZG7_z_JVYHjMQbuzQp6YORPQdfKj4AH0delswkywJz4o6fT7s3LbNRIGCVpzE7VIo8sCxLhtRdVFXprVEKjSQptzFyBdDntiDO08nmrY!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3040',
    companyRef: 3040
  },
  {
    companyName: 'Alkhorayef Water and Power Technologies Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRGGqpMr3IdLlUERs8ACepMbp//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2081',
    companyRef: 2081
  },
  {
    companyName: 'Umm Al-Qura Cement Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdDNCoJAFAXgZ2nhMuakjVo7I53-TE0inU2MBSao48IK3z6plVHW3V34zuVwCScR4aW4ZamoM1mKvN1jrh-ppUNdmPCYo9oInMksmNtshPWYHLoAoU9b4LvaBjsw6IT_k8eXsfA7z7vEdJmOYGsFnmpQIFTfwYeKT9DXobcFM8iK8DSXyethl7qupgoU1OIs7tdcaQ-cZFGJsgmbIpEt0gBKqmIfIVsOeWwNHkEsRbg!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3005',
    companyRef: 3005
  },
  {
    companyName: 'Mobile Telecommunication Company Saudi Arabia',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxJ81E7I51epiaRzibGAhPUcWGF_76hVkZZd3fhO5fDJYzEhFX8lme8yUXFC7knzDjqtgF1YcGnruogdCezcO7QEdZjcugCRIEuQeBpG-xAYRD2Tx5fxsbvPOsSy6MGwq0d-qqpA5H6Dj5UfIK-Dr0tqElWhGWFSF8PuzRNPVWgoOFnfr8WijxwEmXNqzZqy1RIZEIDqct9jHw5ZIk9eACaD5Ne//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7030',
    companyRef: 7030
  },
  {
    companyName: 'Al-Babtain Power and Telecommunication Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpzEftjHR6mU4S6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7ULB10YcJjDrXBncmMz202wnpMDl2AwNda4LvqBjsw6ET8k8eXsfA7L7rEdJkOvrW4Rw0NCOg7-FDxCfo69LZgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctoioFqfJ9iHQ5FJE1eAAMjA46//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2320',
    companyRef: 2320
  },
  {
    companyName: 'Fawaz Abdulaziz Alhokair Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLVKqCVPk-RLocisgaPABnfqgR//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4240',
    companyRef: 4240
  },
  {
    companyName: 'Middle East Healthcare Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJfLYz0ullahLpbGIsMEEdF1b47xtqVZR1dxe-czlcwkhCWM2vRc7bQtS8lHvKjIPuGFDnFgLqqS4iz55GM5eOsNLI_hUgDnUJQn-8xhYUBmH_5PFlHPzOs1di-dRAtHGiQDV1IFbfwYeKD9DXobcFNcmSsLwU2fNh57ZtJgoUtPzEb5dSkQeOomp43cVdlQmJNMAmTbVLUCyGLHUGdyfBIrI!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4009',
    companyRef: 4009
  },
  {
    companyName: 'Bank Albilad',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRdLR2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYqWT_StA6Bsd8N3RGltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6pKo6SF3sImSLoYjZ4A4ZJs7M//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1140',
    companyRef: 1140
  },
  {
    companyName: 'Takween Advanced Industries Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bpFKopMr3IdLlUERs8AD-FnXy//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1201',
    companyRef: 1201
  },
  {
    companyName: 'Dr. Sulaiman Al Habib Medical Services Group',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczxbe0m0ullahLpbGIsMMHXwgr_fVIro6y7u_Cdy-ESTiLCS3HLUtFkVSnybo-5cdSpAWVhwWOOYiNwJrNgbjMZa40c-gChr3fAd9UNdmAwCP8njy9D8TvP-8RymYFgSwNPMXUgVN7Bh4pPMNRhsAUzyYrwNK-S18MuTVNPJUhoxFncr7nUHThVRS3KNmyLpOqQBlkldbGPkC3HPKajB1TA7tk!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4013',
    companyRef: 4013
  },
  {
    companyName: 'Al Hassan Ghazi Ibrahim Shaker Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHpUKOhWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjJqwstH8FkES2BlEwWsMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjUxsWqitdymUiyHP6OAOe6Mtzw!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1214',
    companyRef: 1214
  },
  {
    companyName: 'Saudi Tadawul Group Holding Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jZDLDoIwEEW_xQVL06HKQ3c1Qn0hVGKEbkzRBEmAsqga_t5GVxhF726Sc29OBnGUIF6LW5ELVchalPpOuX20iA144UJIfewB8yczNveoCesxOnQBiCNLA1Ew2sAOKNiI_9OHLyHwu8-7iBtQG9iWsBA7FkCM34EPik-gz6HXgjpohXheyuz1sItSzdQAA5Q4i_u1NPTASVaNqNu4rTKpIVMHNdU-gWI55CkZPADkeUZi//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1111',
    companyRef: 1111
  },
  {
    companyName: 'Walaa Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdDNCoJAFAXgZ2nhMuZkOVq7iXT6MzWJdDYxFpigjgsrfPukVkVZd3fhO5fDJYJERJTymqWyzlQp83aPBT0YjEKfW_C4o9sInPE0mNl8gNWI7F8BQt9oge8O19iCgxLxTx5fhuF3XrwSy-UUwYYFnm4aQKi_gw8VH6CrQ2cLbpIlEWmukufDznVdTTRoqOVJ3i651h44qqKSZRM2RaJaZIGCVMUuQrboi5j17sSClqs!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8060',
    companyRef: 8060
  },
  {
    companyName: 'Jadwa REIT Saudi Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoWKOhWI9QvhEqM0MUUTZAEKEPV8O8lOmkUve2S5728OSRQgkQtr0UudaFqWXZ7KsjBpgTw3IWQ-dgD7o-nfOaxEawstH8FEEd2B6LAXMMWGBAk_snDl6HwOy9eiRswAnxDeYgdGyDG7-BDxQfo69DbgjloiURequz5sLPWzcQAA7Q8ydulNLoDR1U1sm7jtspUhyzTwqipdgkUi6FI6eAOWyuuXg!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4342',
    companyRef: 4342
  },
  {
    companyName: 'Tabuk Cement Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxJ89XOSKeXqUmks4mxwAR1XFjhv2-oVVHW3V34zuVwCSMJYTW_FjlvC1HzUu4pMw66Y0CdWwiop7qIPHsazVw6wmpM9q8AcahLEPraGltQGIT9k8eXcfA7z16J5VMD0caJAtXUgVh9Bx8qPkBfh94W1CRLwvJSZM-Hndu2mShQ0PITv11KRR44iqrhdRd3VSYk0mCDNNUuQbEYstQZ3AFDVZRK//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3090',
    companyRef: 3090
  },
  {
    companyName: 'SABIC Agri-Nutrients Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDDB18IK_31DrYqy7u7Cdy6HSwSJiCjlNUtlk1WlzNUeC-OgMwN0bsHjDrUROONpMLP5AKsR2b8ChL6ugO8O19iCwyDinzy-DMPvvHgllssNBBsWeNTUgZC-gw8VH6CrQ2cLbpIlEWleJc-HnZumnmjQ0MiTvF1yTR04VkUtyzZsi6RSiIKC1MUuQrboi5j17v44xhM!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2020',
    companyRef: 2020
  },
  {
    companyName: 'Alinma Retail REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdDLDoIwEAXQb3HB0nQsUNBdjVBfCJUYoRtTNEESXouq4e9tdKVRdHaTnDu5GSRQgkQtr0UuVdHUstR7KsjBpgTw3IWQ-dgD7o-nfOaxEawstH8FEEe2BlFgrmELDAgS_-Thy1D4nRevxA0YAb6hPMSODRDjd_Ch4gP0dehtwRy0RCIvm-z5sLNS7cQAA5Q8ydulNPSBY1O1su7irsoajSzTslFb7RIoFkOR0sEdm4FjOw!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4345',
    companyRef: 4345
  },
  {
    companyName: 'Emaar The Economic City',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLVEpBqnwfIl0ORWQNHpWqUjM!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4220',
    companyRef: 4220
  },
  {
    companyName: 'SEDCO Capital REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8yk62rdjHT7MjWJdC-xFpigrgcr_PctdSrKmtvA8w4vAxwS4LW4FrloC1mLUu0ppwfToajPbQyYp7sYeeNpNHPZCFcE9q8A49BUIPSNNW6RIQX-Tx6_jIO_8_yV2D6jGG2cKNAtEzHW38GHig_Q16G3BbNgCTwvZfZ82Lltm4mGGrbiJG6XUlMHjrJqRN3FXZVJhYhBCDTVLsFiMeSpM7gD7WBspg!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4344',
    companyRef: 4344
  },
  {
    companyName: 'Scientific and Medical Equipment House Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRfNXOSKeX6SSRzibGAhPUcWGF_z6pVVHW3V34zuVwCScx4ZW45ploclmJotsTbh4Mx4Q2txFQT3PBvPGUzVyqYqWT_StAFBodCP3RGltQmIT_k8eXcfA7z1-J7VMTbOOwQLMMINLewYeKD9DXobcFtciS8KyQ6fNh56apJwoUNOIkbpdC6Q4cZVmLqo3aMpUd0qHqpC53MfLFkCfO4A6UaiO8//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4014',
    companyRef: 4014
  },
  {
    companyName: 'BinDawood Holding Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHpUKOhWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjJqwstH8FkES2BlEwWsMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjSyTmKitdymUiyHP6OAOcprpDQ!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4161',
    companyRef: 4161
  },
  {
    companyName: 'Saudi Public Transport Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJfNXOSKeXqUmks4mxwAR1XFjhv2-olVHW3V34zuVwCSMxYRW_5RlvclHxQu4JM466bUBdWPCpqzoI3cksnDt0hLVGDl2AKNAlCLzxBjtQGIT9k8eXsfE7z7rE8qiBcGuHvmrqQKS-gw8Vn6CvQ28LapIVYVkh0tfDLk1TTxUoaPiZ36-FIg-cRFnzqo3aMhUSadBA6nIfI18OWWIPHgRbCJY!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4040',
    companyRef: 4040
  },
  {
    companyName: 'Al-Etihad Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczR8lE7I51epiaRzibGAhN8LabCf99QK6Osu7vwncvhEkZiwip-yzMu8rrihdwTZhx124C2sOBTV3MQupNZOHeoivWYHLoAUaBLEHijDXagMAj7J48vY-N3nnWJ5VED4dYOfc3UgUh7Bx8qPkFfh94W1CQrwrKiTl8PuwjRTBUoEPzM79dCkQdOddnwqo3aMq0lslQTpCn3MfLlkCX24AG9yAW8//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8170',
    companyRef: 8170
  },
  {
    companyName: 'Saudi Arabian Oil Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jZA9D4IwFEV_iwOj6bNKQbcaoX4hVGKELqZogiRAGaqGf2-jk0bRu73k3JuThwRKkKjltcilLlQtS3OnghxsSgDPXQiZjz3g_njKZx4bwGqE9q8AxJFtgCgYrmELDAgS__ThSyj87otXxA0YAb6hPMSODRDjd-CD4gPocui0YA5aIpGXKns-7Kx1M7HAAi1P8nYpLTNwVFUj6zZuq0wZCJugptolUCz6IqW9OzDZCHU!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2222',
    companyRef: 2222
  },
  {
    companyName: 'Bawan Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxzEftJtLpZWoS6WxiLDDB18IK_31Sq6Ksu7vwncvhEkEiIkp5zVLZZFUp826PhXHQmQE6t-Bxh9oInPE0mNlcxWpE9q8Aoa93wHe1NbbgMIj4J48vw_A7L16J5XIDwYYFHjV1IKTv4EPFB-jr0NuCm2RJRJpXyfNh56apJwoUNPIkb5dc6Q4cq6KWZRu2RVJ1SNVASV3sImSLoYjZ4A60onwg//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1302',
    companyRef: 1302
  },
  {
    companyName: 'Al Moammar Information Systems Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftjHR6mZpEOpsYC0xQx4UV_vuGWhVl3d2F71wOl3ASE16Ja56JJpeVKNSecOOg2wbo3ILPXOogdMfTcOawAVYjsn8FiAJdgcAbrrEFg0H4P3l8GRu_8_yVWB4zEG7s0KemDkT0HXyo-ABdHTpbMJMsCc8KmT4fdm6aeqJBQyNO4nYpNHXgKMtaVG3UlqlUyKQAqctdjHzR54nduwOAQE7I//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7200',
    companyRef: 7200
  },
  {
    companyName: 'Yanbu National Petrochemical Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpyle7iXR6mZpEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR1VpoEuDLjcphZ825z5c4uPsJ6QQxcg8NQWeM54gx04NCL-yePLMPzOiy4xHK7B3zLfpboKBPQdfKj4BH0deltwnayISLIyfj3sUtfVVIGCWp7l_Zop7YFTmVeyaIImj8sWUWqCVPk-RLociogNHmO7kko!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2290',
    companyRef: 2290
  },
  {
    companyName: 'Saudi Ceramic Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLKFSQKt-HSJdDEVmDBwzsPDE!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2040',
    companyRef: 2040
  },
  {
    companyName: 'Elm Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpzEftjHR6mU4S6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7ULB10YcJjDrXBncmMz202wnpMDl2AwNda4LvqBjsw6ET8k8eXsfA7L7rEdJkOvrW4Rw0NCOg7-FDxCfo69LZgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctMihUUuX7EOlyKCJr8ABbZS-0//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7203',
    companyRef: 7203
  },
  {
    companyName: 'Saudi Arabian Mining Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8y45UfdNtLty3STSPcSa4EJ6nqwwn-f1Mkoa24Dzzu8DAiIQJTylqWyzlQp83aPhXk0qIlkYaPPXOIgdyczPneYjusxHLoAw8BoQeCNNrhDhiaIf_L4ZSj-zosusT1mIt9S7hPLQAzJO_hQ8Qn6OvS2YBasQKS5Sl4Pu9R1NdVQw1qe5f2aa-2BkyoqWTZhUySqRTrRdaiKfYTZcihiOngAFs2OSw!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1211',
    companyRef: 1211
  },
  {
    companyName: 'Almarai Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDBBHRdW-O-TWhVl3d2F71wOlwgSEVHKa5bKOlOlzNs9FsZBZwbo3ILHHWojcMbTYGbzAVYjsn8FCH29Bb47XGMLDoOIf_L4Mgy_8-KVWC43EGxY4FFTB0L6Dj5UfICuDp0tuEmWRKS5Sp4PO9d1NdGgoZYnebvkWnvgqIpKlk3YFIlqEaUWSFXsImSLvohZ7w6LYGnz//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2280',
    companyRef: 2280
  },
  {
    companyName: 'Saudi Enaya Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoUKehWI9QvhEqM0MUUTZAEKANq-Pc2OmkUve2S5728OSRQgkQtr0Uu20LVstR7KsjBpgTw3IWQ-dgD7o-nfOYxE1YjtH8FEEe2BlFgrWELDAgS_-Thy1D4nRevxA0YAb6hPMSODRDjd_Ch4gP0dehtwRy0RCIvVfZ82Lltm4kBBrTyJG-X0tAHjqpqZN3FXZUpjVzLNFFT7RIoFkOR0sEdWthQhA!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8311',
    companyRef: 8311
  },
  {
    companyName: 'National Medical Care Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdDNCoJAFAXgZ2nhMuZkjlo7I53-TE0inU2MBSao48IK3z6plVHW3V34zuVwCScR4aW4ZamoM1mKvN1jrh-ppUNdmPCYo9oInMksmNtshLVGDl2A0Kct8N3xBjsw6IT_k8eXsfA7z7vEdJmOYGsFnmpQIFTfwYeKT9DXobcFM8iK8DSXyethl7qupgoU1OIs7tdcaQ-cZFGJsgmbIpEt0gBKqmIfIVsOeWwNHgpQ15g!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4005',
    companyRef: 4005
  },
  {
    companyName: 'Perfect Presentation for Commercial Services Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLDAqVVPk-RLocisgaPACbz-LR//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7204',
    companyRef: 7204
  },
  {
    companyName: 'United Wire Factories Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxRc7R2Rjq9TE0inU2MBSb4Wljhv2-oVVHW3V34zuVwCScx4ZW45plo87oShdwTTg-GTaHNLfjM1RyE7ngazhymYjUi-1eAKDAkCDx9jS0YKOH_5PFlbPzO81dieYwi3Nihr5kGEGnv4EPFB-jr0NuCmWRJeFbU6fNh57ZtJgoUtOIkbpdCkQeOddmIqou6Mq0lUnWopCl3MfLFkCf24A5vhx1c//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1301',
    companyRef: 1301
  },
  {
    companyName: 'Jazan Energy and Development Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJctR2E-n0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh41RqEuDLjcVi34tjnz5xYfYT0hhy5A4Gkt8JzxBjtwUCL-yePLMPzOiy4xHE7hb5nvqroGBOo7-FDxCfo69LbgOlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctojBBqnwfIl0ORcQGD8-5Or4!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=6090',
    companyRef: 6090
  },
  {
    companyName: 'Saudi Electricity Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRGrV2Rjq9TE0inU2MBSb4Wljhv2-olVHW3V34zuVwCScR4aW4ZalosqoUudxjrh-ppUNbmPCYo9kInMksmNtMxXpMDl2A0KcS-O5ogx0YdML_yePLWPid511iukxHsLUCTzMoEGrv4EPFJ-jr0NuCGWRFeJpXyethl6appwoUNOIs7tdckQdOVVGLsg3bIqkkoqoKUhf7CNlyyGNr8ABdv0GM//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=5110',
    companyRef: 5110
  },
  {
    companyName: 'Lazurde Company for Jewelry',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRdLR2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYqWT_StA6Bsd8N3RGltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6pENVSV3sImSLoYjZ4A75BIA4//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4011',
    companyRef: 4011
  },
  {
    companyName: 'Alamar Foods Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRdLR2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYqWT_StA6Bsd8N3RGltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6RKHqpC52EbLFUMRscAdT-h9o//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=6014',
    companyRef: 6014
  },
  {
    companyName: 'Halwani Bros. Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRcrR2E-n0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh51RqEtTLjc1iz49mTmzy2uYj0mhy5A4Okt8JzRBjtwUCL-yePLMPzOiy4xHU7hb5nvaoYOBNo7-FDxCfo69LbgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctooBKqnwfIl0ORcQGD9ZPR1U!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=6001',
    companyRef: 6001
  },
  {
    companyName: 'Allianz Saudi Fransi Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51epiaRzibGAhN8LabCf5_Uyijr7i5853K4hJOI8FLcslTIrCpF3u4x14-apYMuTHjMoTYCZzIL5jYbYa2SQxcg9LUW-O54gx0YdML_yePLWPid511iukxHsLUCjxoaENJ38KHiE_R16G3BDLIiPM2r5PWwi5T1VIECKc7ifs2V9sCpKmpRNmFTJFWLTKggdbGPkC2HPLYGD1UzEAM!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8040',
    companyRef: 8040
  },
  {
    companyName: 'Knowledge Economic City',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczxbe0m0ullahLpbGIsMMHXwgr_fVIro6y7u_Cdy-ESTiLCS3HLUtFkVSnybo-5cdSpAWVhwWOOYiNwJrNgbjMZa40c-gChr3fAd9UNdmAwCP8njy9D8TvP-8RymYFgSwNPMXUgVN7Bh4pPMNRhsAUzyYrwNK-S18MuTVNPJUhoxFncr7nUHThVRS3KNmyLpOqQpsogdbGPkC3HPKajB31RR4w!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4310',
    companyRef: 4310
  },
  {
    companyName: 'Alinma Hospitality REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8zkt92MdPsy3STSvcRaYIK6HrbCf5_UyShrbgPPO7wMMEiA1fxW5FwWouZlt6fMPBquierCxpD4qofUd2Z07pEJrnU49AHGkdGBKNA2uEOCJrB_8vhlXPydZ31iB8REunVpqFoGYqy-gw8Vn2Cow2ALYsEKWF6K7PWwi5TNVEEFJT_z-7VUugMnUTW8buO2ykSHdE13oKn2CRbLMUvd0QO2EJYR//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4349',
    companyRef: 4349
  },
  {
    companyName: 'Al Sagr Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczR8lE7I51epiaRzibGAhN8LabCf99QK6Osu7vwncvhEkZiwip-yzMu8rrihdwTZhx124C2sOBTV3MQupNZOHeoivWYHLoAUaBLEHijDXagMAj7J48vY-N3nnWJ5VED4dYOfc3UgUh7Bx8qPkFfh94W1CQrwrKiTl8PuwjRTBUoEPzM79dCkQdOddnwqo3aMq0lslQLpCn3MfLlkCX24AEgC43o//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8180',
    companyRef: 8180
  },
  {
    companyName: 'Etihad Etisalat Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftjHR6mZpEOpsYC0xQx4UV_vuGWhVl3d2F71wOl3ASE16Ja56JJpeVKNSecOOg2wbo3ILPXOogdMfTcOawAVYjsn8FiAJdgcAbrrEFg0H4P3l8GRu_8_yVWB4zEG7s0KemDkT0HXyo-ABdHTpbMJMsCc8KmT4fdm6aeqJBQyNO4nYpNHXgKMtaVG3UlqlUyAQFqctdjHzR54nduwNy1Gjn//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7020',
    companyRef: 7020
  },
  {
    companyName: 'Alinma Tokio Marine Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoUKehWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjJqxGaP8KIIlsDaLAWsMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjVzLxKitdymUiyHP6OAOgf0x-A!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8312',
    companyRef: 8312
  },
  {
    companyName: 'Saudi Home Loans Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoUKehWI9QvhEqM0MUUTZAEKANq-Pc2OmkUve2S5728OSRQgkQtr0Uu20LVstR7KsjBpgTw3IWQ-dgD7o-nfOYxE1YjtH8FEEe2BlFgrWELDAgS_-Thy1D4nRevxA0YAb6hPMSODRDjd_Ch4gP0dehtwRy0RCIvVfZ82Lltm4kBBrTyJG-X0tAHjqpqZN3FXZUpjUzTtVBT7RIoFkOR0sEdJqpa9Q!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1183',
    companyRef: 1183
  },
  {
    companyName: 'Arabian Pipes Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDDB18IK_31DrYqy7u7Cdy6HSwSJiCjlNUtlk1WlzNUeC-OgMwN0bsHjDrUROONpMLP5AKsR2b8ChL6ugO8O19iCwyDinzy-DMPvvHgllssNBBsWeNTUgZC-gw8VH6CrQ2cLbpIlEWleJc-HnZumnmjQ0MiTvF1yTR04VkUtyzZsi6RSiFKA1MUuQrboi5j17gys4Dw!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2200',
    companyRef: 2200
  },
  {
    companyName: 'Saudi Industrial Export Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRfNXOSKeX6SSRzibGAhPUcWGF_z6pVVHW3V34zuVwCScx4ZW45ploclmJotsTbh4Mx4Q2txFQT3PBvPGUzVyqYqWT_StAFBodCP3RGltQmIT_k8eXcfA7z1-J7VMTbOOwQLMMINLewYeKD9DXobcFtciS8KyQ6fNh56apJwoUNOIkbpdC6Q4cZVmLqo3aMpUd0lUdpC53MfLFkCfO4A6VymA4//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4140',
    companyRef: 4140
  },
  {
    companyName: 'Buruj Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDBBHRdW-O-TWhVl3d2F71wOlwgSEVHKa5bKOlOlzNs9FsZBZwbo3ILHHWojcMbTYGbzAVYjsn8FCH29Bb47XGMLDoOIf_L4Mgy_8-KVWC43EGxY4FFTB0L6Dj5UfICuDp0tuEmWRKS5Sp4PO9d1NdGgoZYnebvkWnvgqIpKlk3YFIlqkUVNkKrYRcgWfRGz3h1PfM2V//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8270',
    companyRef: 8270
  },
  {
    companyName: 'Sadr Logistics Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoUKehWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjJqxGaP8KIIlsDaLAWsMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjUzXwqitdymUiyHP6OAOcOPaaw!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1832',
    companyRef: 1832
  },
  {
    companyName: 'Ataa Educational Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHpWKOBWI9QvhEqM0MUUTZAEKANq-Pc2OmkUve2S5728OSRQgkQtr0Uu20LVstR7KsjBogTw3IGQ-dgD7rtTPvPYCFYm2r8CiCNLgygYr2ELDAgS_-Thy1D4nRevxAkYAb6hPMS2BRDjd_Ch4gP0dehtwWy0RCIvVfZ82Lltm4kBBrTyJG-X0tAHjqpqZN3FXZUpjUzsYtRUuwSKxVCkdHAHxsjIDA!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4292',
    companyRef: 4292
  },
  {
    companyName: 'Raydan Food Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxytHaGen0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh01k4EuDLjcphZ8ezLz5xZXsR6TQxcg8LQWeM5ogx04GBH_5PFlTPzOiy4xHM7gb03fpboGBPQdfKj4BH0deltwnayISLIyfj3sUtfVVIGCWp7l_Zop7YFTmVeyaIImj8sWMaiUVPk-RLocisgcPADlsd2Q//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=6012',
    companyRef: 6012
  },
  {
    companyName: 'National Metal Manufacturing and Casting Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftJtLpZWoS6WxiLDDB18IK_31DrYqy7u7Cdy6HSwSJiCjlNUtlk1WlzNUeC-OgMwN0bsHjDrUROONpMLP5AKsR2b8ChL6ugO8O19iCwyDinzy-DMPvvHgllssNBBsWeNTUgZC-gw8VH6CrQ2cLbpIlEWleJc-HnZumnmjQ0MiTvF1yTR04VkUtyzZsi6RSiFIKUhe7CNmiL2LWuwOdHWaU//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2220',
    companyRef: 2220
  },
  {
    companyName: 'Tourism Enterprise Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxx8lU7I51epiaRzibGAhN8Lazw3zfUqijr7i5853K4hJOY8Epc80y0eV2JQu4JNw66bYDOLfjMpQ5CdzwNZw5TsdLI_hUgCnQJAm-0xhYMBuH_5PFlbPzO81diecxAuLFDn5o6ENF38KHiA_R16G3BTLIkPCvq9Pmwc9s2EwUKWnESt0uhyAPHumxE1UVdmdYSaaoJ0pS7GPliyBN7cAfsoB0p//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4170',
    companyRef: 4170
  },
  {
    companyName: 'Methanol Chemicals Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRAGVVPk-RLociogNHhloTyY!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2001',
    companyRef: 2001
  },
  {
    companyName: 'Development Works Food Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxRc7R2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYjUi-1eA0Dc64Lv6GltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6RKHqpC52EbLFUMRscAeTUNIN//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=6013',
    companyRef: 6013
  },
  {
    companyName: 'City Cement Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxJ81E7I51epiaRzibGAhPUcWGF_76hVkZZd3fhO5fDJYzEhFX8lme8yUXFC7knzDjqtgF1YcGnruogdCezcO7QEdZjcugCRIEuQeBpG-xAYRD2Tx5fxsbvPOsSy6MGwq0d-qqpA5H6Dj5UfIK-Dr0tqElWhGWFSF8PuzRNPVWgoOFnfr8WijxwEmXNqzZqy1RIpAEaqct9jHw5ZIk9eAD3Z4dA//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=3003',
    companyRef: 3003
  },
  {
    companyName: 'Alkhaleej Training and Education Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8tluIp1epiaRzibGAhN8Lazw3ye1Ksq6uwvfuRwuESQiopTXLJVNVpUy7_ZY6AeN6aBzEx53qI3AsabBzOYjrFSyfwUIfa0DvjteYwsOnYh_8vgyDL_z4pWYLtcRbFjgUUMDQvoOPlR8gL4OvS24QZZEpHmVPB92bpp6okBBI0_ydsmV7sCxKmpZtmFbJFWHVGqB1MUuQrYYipgN7msMpu0!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4290',
    companyRef: 4290
  },
  {
    companyName: 'Kingdom Holding Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLVGqCVPk-RLocisgaPACD111U//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4280',
    companyRef: 4280
  },
  {
    companyName: 'The Power and Water Utility Company for Jubail and Yanbu',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpzEftjHR6mU4S6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7ULB10YcJjDrXBncmMz202wnpMDl2AwNda4LvqBjsw6ET8k8eXsfA7L7rEdJkOvrW4Rw0NCOg7-FDxCfo69LZgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctojBVUuX7EOlyKCJr8AAzYKgI//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2083',
    companyRef: 2083
  },
  {
    companyName: 'Arabian Internet and Communications Services Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpykftjHR6mZpEOpsYC0xQx4UV_vuGWhVl3d2F71wOl3ASE16Ja56JJpeVKNSecOOg2wbo3ILPXOogdMfTcOawAVYjsn8FiAJdgcAbrrEFg0H4P3l8GRu_8_yVWB4zEG7s0KemDkT0HXyo-ABdHTpbMJMsCc8KmT4fdm6aeqJBQyNO4nYpNHXgKMtaVG3UlqlUyKSgpC53MfJFnyd27w4thCAp//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=7202',
    companyRef: 7202
  },
  {
    companyName: 'The Company for Cooperative Insurance',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczR8lE7I51epiaRzibGAhN8LabCf99QK6Osu7vwncvhEkZiwip-yzMu8rrihdwTZhx124C2sOBTV3MQupNZOHeoivWYHLoAUaBLEHijDXagMAj7J48vY-N3nnWJ5VED4dYOfc3UgUh7Bx8qPkFfh94W1CQrwrKiTl8PuwjRTBUoEPzM79dCkQdOddnwqo3aMq0lsqCCNOU-Rr4cssQePADejZcw//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8010',
    companyRef: 8010
  },
  {
    companyName: 'Naseej International Trading Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdA9D4IwEAbg3-LAaHoUKehWI9QvBCRG6GKKJkgClKFq-Pc2OmkUve2S5728OcRRingjrmUhVCkbUek94-RgUwJ47kLIfOxB7I-n8cxjJqxGaP8KIIlsDaLAWsMWGBDE_8nDl6HwO89fiRswAvGGxiF2bIAEv4MPFR-gr0NvC-agJeJFJfPnw85KtRMDDFDiJG6XytAHjrJuRdMlXZ1LjUxsWqitdymUiyHP6OAOuwngqg!!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1213',
    companyRef: 1213
  },
  {
    companyName: 'Nama Chemicals Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bRKkKUuX7EOlyKCI2eADkdxuF//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2210',
    companyRef: 2210
  },
  {
    companyName: 'Saudi Industrial Investment Group',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpytHaTaTTy9Qk0tnEWGCCr4UV_vukVkVZd3fhO5fDJZKERBbqmiaqTstCZe0eSXbQOQOdm3CFTS349njqzywxwGpE9q8Agae3wHOGa2whwIj8J48vw_E7L1-J6QgGf8N9lxo6ENB38KHiA3R16GwhDLIkMsnK-Pmwc11XEw0aanVSt0umtQeOZV6pogmaPC5bRKkOUuW7EOmiLyPeuwOHEmcP//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=2250',
    companyRef: 2250
  },
  {
    companyName: 'Batic Investments and Logistics Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRdLR2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYqWT_StA6Bsd8N3RGltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6pKsqSF3sImSLoYjZ4A4edOcL//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4110',
    companyRef: 4110
  },
  {
    companyName: 'Al Rajhi REIT Fund',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczJx2jtjHR6mZpEOpsYC0zwtZgK_31Sq6Ksu7vwncvhEk5iwitxzTMh87oSRbcnnB4Mm0KdW_CZqzoI3fE0nDlshJVO9q8AUWB0IPC0NbZgoIT_k8eXsfE7z1-J5TGKcGOHvmoaQKS-gw8VH6CvQ28LZpIl4VlRp8-HnaVsJgoUSHESt0uhdAeOddmIqo3aMq07pGs6SFPuYuSLIU_swR3278C_//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4340',
    companyRef: 4340
  },
  {
    companyName: 'Saudi Marketing Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jZC7DoJAEEW_xYLS7BV5aYcR1hfCSoywjVk0QRJeBWr4ezdaYRSdbpJzZ04u4SQivBS3LBVNVpUil3vMjaNuG1AXFnzqqg6YO5mxuUNHWGvk0AUQBroEAm-8wQ4UBuH_5PFlbPzO8y5iedQA29rMV00dCNV34IPiE-hz6LWgJlkRnuZV8irs0jT1VIGCRpzF_Zor8sCpKmpRtmFbJJWENMi3dbGPkC2HPLYHD9F1tuQ!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4006',
    companyRef: 4006
  },
  {
    companyName: 'Fitaihi Holding Group',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRdLR2E-n0MjWJdDYxFpjga2GF_z6pVVHW3V34zuVwiSAREaW8ZqlssqqUebfHgh4MRqHNLXjc0WwEzngazGyuYqWT_StA6Bsd8N3RGltwUCL-yePLMPzOi1diuZwi2LDA00wDCLV38KHiA_R16G3BTbIkIs2r5Pmwc9PUEwUKGnmSt0uudAeOVVHLsg3bIqk6pKsWSF3sImSLoYjZ4A5xY5V9//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4180',
    companyRef: 4180
  },
  {
    companyName: 'Abdulmohsen Alhokair Group for Tourism and Development',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxxykftJtLpZWoS6WxiLDDB18IK_31SK6Osu7vwncvhEkFCIgp5SxNZp2Uhs3aPhH7UmA66MOFym1rw7cnMn1tcxXpMDl2AwNNa4DmjDXbg0In4J48vw_A7L7rEdLgOf8t8lxoaENB38KHiE_R16G3BDbIiIsnK-PWwS11XUwUKanmW92umtAdOZV7JogmaPC5bpJoUpMr3IdLlUERs8AA1_E8z//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1820',
    companyRef: 1820
  },
  {
    companyName: 'Saudi Arabian Cooperative Insurance Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczR8lE7I51epiaRzibGAhN8LabCf99QK6Osu7vwncvhEkZiwip-yzMu8rrihdwTZhx124C2sOBTV3MQupNZOHeoivWYHLoAUaBLEHijDXagMAj7J48vY-N3nnWJ5VED4dYOfc3UgUh7Bx8qPkFfh94W1CQrwrKiTl8PuwjRTBUoEPzM79dCkQdOddnwqo3aMq0lslSANOU-Rr4cssQePACnxwQn//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=8100',
    companyRef: 8100
  },
  {
    companyName: 'Aldrees Petroleum and Transport Services Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51eppNEOpsYC0zwtbDCf5_Uyijr7i5853K4RJCQiELe0kTWaVnIrN0joR81SwddmPCYQ21wZzLjc5uNsFbJoQsQ-FoLfHe8wQ4MOhH_5PFlLPzOiy4xXaaDby3uUUMDAvoOPlR8gr4OvS2YQVZEJFkZvx52qetqqkBBLc_yfs2U9sCpzCtZNEGTx2WLVAqQKt-HSJdDEVmDBwQb1Js!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4200',
    companyRef: 4200
  },
  {
    companyName: 'Sinad Holding Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp8lU7I51epiaRzibGAhN8LabCf5_Uyijr7i5853K4hJOI8FLcslTIrCpF3u4x14-apYMuTHjMoTYCZzIL5jYbYa2SQxcg9LUW-O54gx0YdML_yePLWPid511iukxHsLUCjxoaENJ38KHiE_R16G3BDLIiPM2r5PWwi5T1VIECKc7ifs2V9sCpKmpRNmFTJFWLVJggdbGPkC2HPLYGD-Dy_dM!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4080',
    companyRef: 4080
  },
  {
    companyName: 'United International Transportation Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxp0tHaGen0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh01k4EuDLjcphZ8ezLz5xYfYa2SQxcg8LQWeM54gx04GBH_5PFlTPzOiy4xHM7gb03fpboGBPQdfKj4BH0deltwnayISLIyfj3sUtfVVIGCWp7l_Zop7YFTmVeyaIImj8sWqZSBVPk-RLocisgcPAD2zy65//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4260',
    companyRef: 4260
  },
  {
    companyName: 'National Company for Learning and Education',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8y46ardjHT7Mt0k0r3EWmCCXwcr_PdJnYyy5jbwvMPLgIAIRClvWSqbrCpl3u2xoEfdpkgWJvrMJQ5y15rxucNUXGtw6AMMA70DgTfZ4A4ZUhD_5PHL2Pg7L_rE9BhFvrW5TwwdMSTv4EPFJxjqMNiCGbACkeZV8nrYpWnqqYIKNvIs79dc6Q6cqqKWZRu2RVJ1SCOWCnWxjzBbjkVsjx4d7alw//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4291',
    companyRef: 4291
  },
  {
    companyName: 'Aldawaa Medical Services Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8y46mrdNtLty9Qk0r3EWmCCXwcr_PdJnYyy5jbwvMPLgIAIRClvWSqbrCpl3u2xoEeDUSQLCz3uEBsDZzIL5jZXca3DoQ8w9I0O-K62wR1ypCD-yeOXYfg7L_rEcjnFYMsCj5gGYkjewYeKTzDUYbAFN2EFIs2r5PWwS9PUUwUVbORZ3q-50h04VUUtyzZsi6TqkK5SDepiH2G2HIuYjR7fXofs//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4163',
    companyRef: 4163
  },
  {
    companyName: 'National Shipping Company of Saudi Arabia',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZcxpfNbOSKeXqUmks4mxwARfCyv89w21Ksq6uwvfuRwu4SQmvBLXPBNtXleikHvCjYNuG6BzCz5zqYPQHU_DmcNGWGlk_woQBboEgaeusQWDQfg_eXwZG7_z_JVYHjMQbuzQp6YORPQdfKj4AH0delswkywJz4o6fT7s3LbNRIGCVpzE7VIo8sCxLhtRdVFXprVEGlSQptzFyBdDntiDOx5UCQ0!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4030',
    companyRef: 4030
  },
  {
    companyName: 'Saudi British Bank',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczRcrR2E-n0MjWJdDYxFpjga2GF_z6plVHW3V34zuVwiSAhEYW8pYms07KQWbtHgh51RqEtTLjc1iz49mTmzy2uYj0mhy5A4Okt8JzRBjtwUCL-yePLMPzOiy4xHU7hb5nvaoYOBNo7-FDxCfo69LbgBlkRkWRl_HrYpa6rqQIFtTzL-zVT2gOnMq9k0QRNHpctUkFBqnwfIl0ORcQGDxkGIMo!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1060',
    companyRef: 1060
  },
  {
    companyName: 'Al Yamamah Steel Industries Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBLC4JAFAXg39LCZczxbe0m0ullahLpbGIsMMHXwgr_fVIro6y7u_Cdy-ESTiLCS3HLUtFkVSnybo-5cdSpAWVhwWOOYiNwJrNgbjMZa40c-gChr3fAd9UNdmAwCP8njy9D8TvP-8RymYFgSwNPMXUgVN7Bh4pPMNRhsAUzyYrwNK-S18MuTVNPJUhoxFncr7nUHThVRS3KNmyLpOqQrEIjdbGPkC3HPKajBwLpvtg!//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=1304',
    companyRef: 1304
  },
  {
    companyName: 'Arabian Centres Co.',
    companyUrl: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/hidden/company-profile-main/!ut/p/z1/jdBNC4JAEAbg39LBY8y46mrdNtLty9Qk0r3EWmCCXwcr_PdJnYyy5jbwvMPLgIAIRClvWSqbrCpl3u2xoEeDUSQLCz3uEBsDZzIL5jZXca3DoQ8w9I0O-K62wR1ypCD-yeOXYfg7L_rEcjnFYMsCj5gGYkjewYeKTzDUYbAFN2EFIs2r5PWwS9PUUwUVbORZ3q-50h04VUUtyzZsi6TqkK4RFepiH2G2HIuYjR5y2jUA//p0/IZ7_5A602H80O0VC4060O4GML81G57=CZ6_5A602H80OGF2E0QF9BQDEG10K4=NJstatementsTabData=/?statementType=1&reportType=0&symbol=4321',
    companyRef: 4321
  }]