const skills = [
  {
    name: 'laravel',
    background1: '#F0150C',
    background2: '#FD8430',
    background3: '#D9162C',
    background4: '#E35B2B',
    color: '',
    image: 'https://lh3.googleusercontent.com/mJp3ymT-Y8mV909aVUlXCW0UiZSb7GzB0U8GsM0_cBXrHwu0kFV3QWTSaJJBvp8kszKM5TRiME6Mb666BK86JUSpvfOMI-sppPGt-76qcVeL-KxzQEXgEMcxfVMTFHty6-uvtKw72K5X4Q8zwZMT9hct7kRhnczy3ksXI2EYUGmO5SPb1BGa8NfJhbJQ-aE9yjXetUoMVCYwRmXWemw60wqdhnKVcJB1rOjkzJVCVLGMK_j2mN4IbVFxUUISxGq5DAHFxYaqSKXEU6TXBN1DehAJK1DA_i2NhUQtS2-Bfr-i2tfdI_fs2DfDhgQBH0albLOdstoS2R-oS67TIWUJMHXP4chqHVZQD1GUTLMqXDwS3dvWCCwxQyVbDR1aywhK2fQz5D546qxMUWkK7yoj3GoMrRMLi1zgKIH9oep8XzUNGngI-rQ4Jj8SSIpIL6k9Ge4HNNOJx2H0q-zmwVgcg61Awu6jbb344TzuvCCA0LN7wlI1arz3BTmMiGGOoc-i7M9-DbuUp_PqrGdx7U9on6acSEBJAurbiJZKT_XL5M5DjSyNzcR13Iq--Ou7yEJMVLrD58cap3qejFmaJXA3WyaFe9OWiPAbCKOqcyyvPmbUfhnc2BO5f7l40aPdI6T1gW3iDgCyd0U71l0eKFEWpX_UIIlUSgmWg_wbzhrsJZTBVXrKLpwAef8yjRIK=w745-h498-no?authuser=0'
  },
  {
    name: 'sass',
    background1: '#B862D9',
    background2: '#E366E3',
    background3: '#E36666',
    background4: '#D97362',
    color: '',
    image: 'https://lh3.googleusercontent.com/6NZap5MKgjOgKr2_jHj1fT52RZ2SnATfKoDXQBJS0CyjpYZ2rxTCfcICW22JudY0gU1rcgSdJklwe8ZSEHZjGRhICkwapJlriL5ee_Ibr1ESGyaxSJPJDfw5AnmfEhOmgVDdXobeAu6dYyArucWyfT1_vI6_yoLReXoQ257VaokncyW-pdagSVLBMr4kcjqrk55YfzjjteFjgovLmaQVgtBrq48V2nypi1w8oGMVu0kC0314MMYHkMwkKthHS8Ng5F1s9_r1uOXF9x2ynNDpI1NA6YtamJbaFCHq6P2qJyLCJcNrUq35SvuSi5G8BYe7KCcpM-eICy7oiSvq8UMzqlWRwjaXfN1E1F2vDp7Cg7pUdCmDrer6BUGrbwGqYlhVxqh-_EX5n20GId9od2tdeWbDDEnmkUkFUkoRdEcFx_OE_DRJdVH3GCKeVQCkK1FCqqB54f2vJ4MRMHeiDpPZEeUB0QDxU7tRAc3qehVscjARp3b4MZAyMryAcRWWydduN4VJil-kJj6cTvCmG22dMskyKxm_zt_pouicFi2ov7eyIPtklKoi0bVWB7sJQkTgv-hx-PvP4hcMbRFCordG8bcjkh32EJ-ehCwpImxS2240jzw8emu31cm47zTxqKW3nYMT0iXw31Y_IkPshg9AV6YVDDWPx81ZsiFsEUi8p4IZz59X-f_50qsenMRz=w745-h498-no?authuser=0'
  },
  {
    name: 'vue',
    background1: '#40CF66',
    background2: '#40CFB7',
    background3: '#40C43D',
    background4: '#3DB6C4',
    color: '',
    image: 'https://lh3.googleusercontent.com/NUcqfQpokzfU68JJxE0c5OC8bbiqYYJmLsoYV7IYh373qdPIxMeaV6YuM75i77cXXJOGkRp8wIqGSyL0uny7oIuZ6GIOCdRXSqIS0lVoaHBhm56qNUAD-9XfzWzwRQkIrF7P7gDcydRR1OYHRtl5cl-J-qhnTaY5s7KEYGSJ3whGzUux-eHP9cmVp0N47DdATTnCz2BWz0MwEnJWRuG2Yt-PHTQQoe9RUo4O9I3i7TPaAFWtWn6GC_6rYgOn1-1zbqbplu6692VOzkQLX90gX3j8EDQIGBeh2iFx_ajyDvkYN0_FUQEwGiBvllK_DACBT_Ii8gNrgvmw_RdxoqzGgvyx3SKIEpi2q4SThasVmTlI4b6YixHzfct8og-YsPkVYpP3EU1fMVutkfv0Gm1NKSB7slypcz1nyl2Fkswi-FUSSYucM-UJpm6d2Yxrndw2cq_XZ5Ni8rLViowClM6sEfEnrwjWVTQXUccdwZdSsNPMgnpIBggzTBNUjk7FTfWPuKjgEJZTwHwDrJ0CXziJ3AgMVjdrMb-ibMOVZudq7esGvRhu66lUmdwDFBf0bWusz_1I8_FZZp8Q1ReFXMW-NYJ8ME-K7EbZHeXM2Xa9IawJZ1LWcxKtPtR3nKjVkF5lIzEv4WrXZpXu2KWTC8AD3avIgW-dZF29n8FNoYEGNcm2P_9ECEAYxtX-UDtM=w745-h498-no?authuser=0'
  },
  {
    name: 'react',
    background1: '#5684FD',
    background2: '#56FDC2',
    background3: '#4D9EE3',
    background4: '#4DE3D9',
    color: '',
    image: 'https://lh3.googleusercontent.com/QGO-14AsPmhzmTF4MCPYi6zByIUqnd44qjM6v5CQzkaEXbTDsPElWd6lK_WkgQ7MIDEQLV8gZwx91-k9ZshOQcPdqkCPfWqZUPVOrMMwf8VaGwj36ieDxaO1tsW1m2T9IGZHKPOql_F43kRN2grj0A2Y5E-btHJ4ddUkZtGfQQqVqQxRdis9QyeqCcAsy_OckU5cSwDD5VXYKR_EoUmvybLCu08LJrtMlnNDQVZdQiHubALebzw6YmKwwckuo44ueyOBdU3sfJV-SV59AY2IBCUZ5zhlg_Db4mfTNUhkmZZT5C0Srq8ADnjUTGbWuznVwTkgBttL86heNFL7GCuww0xDwP6HOcOSSbALVeURdLFOPw5ZVD59TNo6RQjaBskM_4LQZRpyx1x_uDQRIwCOcZ_pu5fHt9E2gq9uIzpH5bg-yYNKwXQGfIWyzWeCHg2lf9L8g9hQ4JEFmow5AP0O3wosQiECkL2yzxmL2ay5nmVyNbAHPC5KWbSGEQRGSqGiUsZ0Exd0n85FwM1LmJKKc3YzHbYsYUZFTqqrx0MzPwIQawClArNicmF4aq1iga8QNGz1m9Uv4TEAeL-UuUIWmqt0-Qke1qcv-yqMLC0O5K-zZGQqQ77wZwAz2jVzJCsAIoGae5Djvcrf4RLWlio631cBCMSqltQdwRvZCvptRMwOWSsUqgysqbNlMHmd=w745-h498-no?authuser=0'
  },
  {
    name: 'express',
    background1: '#474044',
    background2: '#3D373D',
    background3: '#474140',
    background4: '#3D3937',
    color: '',
    image: 'https://lh3.googleusercontent.com/BU7PmZEPXA0BaFse2VXDF3-A2Gr9LM1eQw7rpDntV9nedzCCfbhuNjJT3cZcTi-QJvvgpNozSFQTE9HMqsXm-iNDqZSn8XZwogyx1QieKe7VlFv11iNRmdFXszX-8AqLSM49kDzXQgaXle5rmtv-W2uJXa6NxEmUs-wAL0I46AhrW6iyKtg8DMP5JdRwh8YzOx8KiW385lZuV7SZgIg1OX5B4r7ZHsiUdmYgs5wywUHRuhYiXx81ZJ9sSMKmn0C9vE9zM_wfHC6xU8hN9ic2N9ohjh24t9QNTIojaTgAPxCOYt0Gzw3UgNnCvqdu7ea7Tz4BdOPog97oN4JsK0qV7ngYcJNk06vK1DlkmdGztWv4uCTm1MAzl3azcCXicrjutaFEE0bftFtpv3c5E5MKCUTa-s4BlkAIJjUV07265r8_o9h2cB0Vw_5oV__O5lKv9ZfklTStgMHqVn2Uz7ivOc5vQUC081H2RTnEFOKP6k9QZneIoTG014QshFy6vJgCyC3v5ZOfnkeHfTYtnlQnFBuTh9wHeStYmJUVvYIc41c9EswB0-HTQc4_1isJUFxpCSHRhfOtLgEsvY-jSuv5BrcvfBe-GuuK3onkZPqEdYgLH-Txz5l-wiCq0oaVPLBbzJgvmvJk7lNy4TaBJU0jX7vbts1lTcs__wyp0MBRXd-HEUyx5xbrDe249K3o=w745-h498-no?authuser=0'
  },
  {
    name: 'graphql',
    background1: '#FC2D50',
    background2: '#F23F2C',
    background4: '#e88df1',
    background3: '#AA2CF2',
    color: '',
    image: 'https://lh3.googleusercontent.com/4vEtyPAlCWN-jC3zAhLHuDxOpL6l7fsWE6v5eCmnI6a8gD1seNBN1CX04DvHuy3BluSZhD3TAuGCRjsDBx8VzD25GGXZSBf9bDUgWISeaMUFakZeR7gHGe3XHiX32j8ilZ-BM-mGEqGkIO4lYqcnhIr0Yaldk79LlR4XiseqFL4dB-XPZZuYcFo2AYi6x3qbyiV4MtPDhpta_jkc2xj8JFFwh6j3DrBD__AycvvxjobtC-hU6FzN37HOam2fbeyYjjAwc3oXAIdBiEiCYv6Xdjf2HKj6HDhplnUFhazP7BihV3VlJ8Mwg6aP8V93CP85BBZpLxYuF3u0gj85fvfZuA0nW80dbRXYRJ7rOj9CYNJQpLEYOzWhE2sAWkOFXmfCvRAS2hZG2krFeuj3UxvWbiIC_VF4H6U_Du_HvS9kl3P3n-zcb7QyFCrT4JFsWxaBbGRYzVo2ro86TmBbCDQfMs_uEbkkWtXAl-MDQcZtFhPKyIBTlYIi4EevMjggUTxeOyDzHPEcuilMZaYmjDY9DU9ib08Db7lbiQONRfcnlo0eA_ZFp8OcHIuTpizfs5gek3t1PAg6Ob-CMqj_NX7dgDD-4wrQA7ZyVJ-rTflRljRJdw3CWfVYbxlB-QAjnUmCSQZLyPtssHs3NQgPd3RGzmBIVPssr7X9wba5hncRCMz3yrGffXq8aOTc_TNd=w745-h498-no?authuser=0'
  },
  {
    name: 'mongodb',
    background1: '#7FC93A',
    background2: '#A8BF37',
    background3: '#3AC953',
    background4: '#37BF76',
    color: '',
    image: 'https://lh3.googleusercontent.com/QdRGifFP-PWzTh1tDOVG5QZOsH6tDEDpvxtKbj04k_8beRJiHJOyd3uAynIBpHo7fUYUlSB8icey9YYyVkVcW281uQ6xrpxXJ0gv0NPAU8Sv7UOQCgZu78f4C4M2-EKaMG2Opwzvcw8BpCHQLVxAgB9_ug0_2NlEsdXqi6IP4jonoCr9sFrtilVWxomA3MivXhAg2OZNbAphgUupYDzlHOjarYrA1AO3omCIJwUlPYyDVAO7KhYfs-Tv12SnyAdiyWQ5ly3XVUp74UJyoD2MxldQ3M0l7pAjrVkO77qwyy0dQ-v9-vleVSPev83BYFlgFJj9unuPg1GKTLzm7a6DYc_SoEv33rEWmdUyNHOtmN1AxuFMcLaK5iXPxmDRKJKpfQULbTIe_mi1jv5dd-dVq8AOL-uxDBj028iMkpNZnZ1i4HKBPbrxsrAfLATXTSkAgjNZkI5g25hho_JzSieg0V7OSLxMY3pw1UAKKBibguAeR8DnG4OAW_Y-6JOCcNNf51ttlhPDJtvR5MIq1cSsOuq0hZV8GOSjB_gdwAM9a2s1cjh0X4xBpxmmZiLUekn2JWJXu044Xn9ORlgCuqgJoNENJyTO0_atm2DmafMfFNIb9MKsEvaE6wF25sD0pVZsvKGWZlQgX7PGkm2PhS_RHrDDqUtcK_eQfyv_173poJKMPwpXWQfkJn0t9Oo0=w745-h498-no?authuser=0'
  },
  {
    name: 'mysql',
    background1: '#08A698',
    background2: '#089C65',
    background3: '#085FA6',
    background4: '#fff',
    color: '',
    image: 'https://lh3.googleusercontent.com/LOcTi-XI4FXPyk8A__L4YkA2Zdzc1HTJbmS3GpxN7u4-ShP7d8CuLWmHHFALjAHS8usaFYy--hg1-kc4fHMOV0MDKhoCJGtihy6vUm2kqTYtRnH0deUwB3L9Oj-fYSwhkxVCqNFY0P3GCtMTgCqSH8DLTfOmQ093FZFhXgTQRW-GfEHDfH--Y8RQ7lPEpVQHEWjLE7khIXZ3bQ5T2aS83FZzEQDXAWAViHPxQ3xiKC8eMhHo_VuuT8eGWyOOC4DkzzKwGwAB4uRQgDRiOjbPgn5LXUJYfLeOsWV8rq1kjCrtMyl5yMhJsJRaTLWEvxzYjdgBmXbEjKXljAEHFrBv-wfEQ2QKZiKv4BlFWOMbA29Fgh8mgluqxbMSmMeMJD9JoNlClYb5uwMDk7VbtMS3JMqVzb_5CIttFHw6HdWM7kL8tQ1BEsmrKjy9j8FbCgUjjAKi6hpUKaIk0B-42gqCdRj_5naEfBHUAG2KxMj39DO8GO3vtEBCR8MDSG_mg1d5XN5kjpaJJEQoJvKuCr1GtpJUqZiyec4oBnEQFhSbbxnQtlZDuUZpJjVu-oHvy3_4T8sz6t3QMs2SwxBS0qF5wU7caurU-0kDvSeJwY5IsakyJG0mBZ_5tsgUoFsUSm7MrALATpk47wV8nPHGe0sjLsQXCGq3zJBv88MF-qaiYj6NTRhJ_hNBl2qfmDm9=w745-h498-no?authuser=0'
  },
  {
    name: 'github',
    background1: '#332E30',
    background2: '#332E33',
    background3: '#332F2E',
    background4: '#332F2E',
    color: '',
    image: 'https://lh3.googleusercontent.com/jXNosP0-DH7aw_DJOQnagRZux-bNWS7I-G0NeNkDyvb9ITnR3RpJGRSlC3DpxVdUoMR13dNBaiEBL3duGs5EkozITqOjpZjsZelbTS65_CQFqJjyFBv3tagFH5P7khv91AYzNsTBwJzI7xak2p6pn8oXCrbCecEiHUL62uwnrnF9bWXcOUaazGJUNisBDWsOy7PKUxPlOcl__UHbO4bpbG8rwxN_nWJRooPWTpm7_cb7_9mfSuFdDBplIAIdrAkJwdmK2T-145KlB9-aiYOUXJN5c_OQMqGlA0sWl1jnK6gnDEsNqBTkqDmH8J8PBEvWjdDx2cqUR6RLVcy4qidVKlKJ-u7dlLG6mfk3hs369X-7VHmrIakmii3IXP9D3yhGcQEqoUwtKUbkosMZjMRMnj6lj1mqpBq_60ArOqrVhdWH5J1VfKks2rx_o3tCsCecrXeKeTNmoYovjT-fG5OCERoygWwOUZOtvNDpin-xRMvmJuCjAoLhLT6x8o4BKtACxkgyaFhMrK7LEz23KXsU9Dck5gGJPg4p2chXYJ0qfg6c1V5ObfSxtH-fi6KNY9txraicSNbPacqDgwqEZJ5s2U_IMIWNvyTwCxIP3_CRIrwszjg6WZQ1lEqZYKNCS-FdT0hLRY0r6Q5hHTvmpAVktxCBJhferfOkwLS4auDfjhYbla1qUmo1lhKqnI4B=w745-h498-no?authuser=0'
  },
  {
    name: 'gitlab',
    background1: '#e24329',
    background2: '#fc6d26',
    background3: '#FD8430',
    background4: '#E35B2B',
    color: '',
    image: 'https://lh3.googleusercontent.com/PryEKe3T1z81UZHqhyA4ZCYSaEdebNj8JskkcKbkOMqycYcUW-wrMHQon_s-Dp95mo__67-HVNa49Qyh5w03cYQr4SjRPLoXPwVil1KEN0nHBUhmjO67pECLm7aMPTTxMFuOC0LsQX2CcPwE7-J4Bhxyfk3Fo9oY2zbU6a32-nesyw8k-UiNAp3FKGZcfUrrMZZqMvYgFrxDt8Rnfbh_tFAwUFN4vCLjIt9xz3v2JKY86oXNwbvMWcbPWyZkgTEUmke6VnvFofWVqfInUVXzjPPbNAs0ZYuer5-fmw57086C5MSXy6gf5nlor7MTDNzK5WR4E0owK72-O6_3U4l64Vhg0Fnymc43TvU0cAfXNJ7jmMNH7e8Io4VRR5NpZvesD72jonIFep_RDrKD22VCHTA1UvcWKR0CYJum4qYgZ8RahDYDsllpbR-nkq8q4aYhlTtX2hj9L0sCmDn8nbs9rHY0zC84LTtMMlpRnHeAcFEX5F6HfcDTNdPEiKNBHKmbTsePVX0FPU8I3C7tauXtM_6rhOTMuJQDZXqg4HYJQnctredjk1w48eoaBuWxxXJexkA3l4zCZgb9olX7Ng7_B7TVM6gYa_th_uz3nUw67Ej9ZHdJOagaRshoMN500YFUxwaQifKCbenEM-Fdsrf4u9yTbt9P7ho_ItKbamVuJ7OXdk0wNBaM97hGcSUe=w745-h498-no?authuser=0'
  },

]

export default skills;