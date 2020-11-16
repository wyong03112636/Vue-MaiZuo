<template>
  <div class="wrap-profile">
    <div class="wrap-login">
      <div class="login">
        <img src="../../assets/rr.jpg" alt="" />
        <a href="#">立即登陆</a>
      </div>
      <div class="order">
        <p>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <span>电影订单</span>
        </p>
        <p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAB8lBMVEXH217F215HcEzE2GLI2F7F21///4DG1WPb222/1WrM4Gb//4DF2V7S4Wm/v4C//4C/32D//wDG213F3F3G213J217M5ma2223F3F3F2VzH3V3G1VzR6F3F213M4Fz//6rP32Df34DR6HTE2GLI223H2lzJ2F3I3mTMzGbM/2bG43GqqqrMzGbV1YDH217I213M3V6q/6rD0lrM3WbI22DG2V7G3WDJ117I22HI22TL2mKq/1XG2WDI3WCA/4DH32C/v2DM/5nV1VXV/4DG213J2F3H2mHH1lzF2V3H2l3M3WDI3l7K21/I21vL3GPI21vD2mKAgIC221vH2l7I02TK1WDX5F7C1lzD0mnE3V7////V6mrY2GLM21/I21uzzGb//2bM2WbJ117R0V3M1lzV42O/32DD4WnC22HK32DG2lzH2l3F2l3G2V7H22DG2l7H21zH2lzI217H21zF2WDI217G2lzG2l3E2l3H213F2l/J3lzH21/H2lu/2WbJ3V3J2WLF217G21zJ3GDH22HE21/G3V/H2l3E2V7b/23F2mDH12DE2F/D2l3F2l/K3GHJ2l7C21vI3F6q1VXG217E22DH21/E21vJ2VzI21/F21/C213H21zF1mPG3WbG2Vzm5mbR5GTj43HG21vJ4GTG2lwE5Wp8AAAApXRSTlOAOQAaLiMEEgcMGQKAEQQECAFHFnk5Cgd8f1IkC10ZAxAICw0O2iEXBQUJAwoGjYweAxEPODYtJiocIgMoJQIgCAUGBn40NzJdUi0uKyosHCICDkQXGBMZER4BDA0jDgoFFBMLGRIQERUY2Hx8h4iLjexP8TVc6btSvlMvW+0UNC9Pr1AyK1kpSQcwQE43PjpMKkEGMThWOC9GRj/uLC2uChwJ6CHeZrAOAAAC/klEQVRIx+2WZ1MaURSGV1d04couuAmbGCNVOooNuwg2sCv23nvvvffeey//M8TM3QBxYONMJvmQ59vOmWfmzt25530RPh8AIV5PibUSqSyytc3vDdpaI2VSiVZM1eNCAPh8hF8IwgnzRh1bFtHSTio6mjkc1AkOp7lDQba3RMjYdRtmIhwU8pFKkICreIJq0e3d04sbnu5uRdUCngpPAJVIMhAqMUERd/76xQPX89wiAaYUgmQEaAhKLeWSiy8eWSS5UjVFaAACcJO4qpzMH/UsjeaT5VViEw4QDaHT1pai8hcGyNHSWq2O0CDhSp5EVFwRw0SKqSgWSXjKcESoEksb0YJYJlJsAdooFauECG5WyxrikrKZSNlJcQ0ytRlHcJ0gktQnZjKRMhP1ZKRAhyNEqkCkMOamw0FnzwcXejrhLD3XqBAJUgmEoJoiSuQ50XDQ2931yYmu7l44i86Rl0Q0UQTiiwVxy+LzMuCgLy3tsxNpaX1wlpEXX8YNwnxfpWCWIQoOQvr9XegPgbMoAyvYQcryYnIRXlm0JLFLPswkH7skeZXYfhzmEseP/VelkFDEhdAQj1KYv6vkH/ZnpHcd7x+/8v8/9/eO965H+K7n7rxY3OG0WBxXmDvoFea6LN1BL0u4lgc8OwP0WoYBMOZZGqMDAEbN4JAnZ2iQjhoYasOTEzPulJmJyWE61GB8Tp1sBWwHnq5Oj1gsXx2wWEamV08DtwO2Tqbo+IRBvXZ8tmtb319YGrdaAx2wWseXFvbXbbtnx2t0UMNKUHOwGb13dWi7vAhw4eLSdni1F715UENXAlg+4uQxK+fLcztRXh9d8IramVs+X4mRx9HlA9YcEtXHJyXG3hh8fsFwE5uYFK9HSbrm0IVqVoE+6I3PLFbNFydqWKxno/4BVcz+LFSv1e0IY1bdsKMf1e1dJdH7u5WAEyaKp37U3gex3yDoXvuo5lEmwn42u+ONeNutZAA0OKFU6VIpDEtJSeE5YP/EMCpVp1ISuAaAZLvj/Q2Kyr/i4Vk2CgAAAABJRU5ErkJggg=="
            alt=""
          />
          <span>商品订单</span>
        </p>
      </div>
    </div>
    <div class="select-card">
      <ul>
        <li>
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iWT/hWP/hGL/hWL/hGP/hGP/hWP/hWP/jWr/hGJJuum2AAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII="
              alt=""
            />
            卖座券
          </span>
          <em class="yo-ico">&#xe646;</em>
        </li>
        <li>
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6o3u7onu7ony7onu6onu7pHq/pIC7o3u6o3u7onq6o3u6onq6o3q7o3q6pH7////Co3rGqo6/pXrVqoC6o3r/qqq+o3y6o3q7onu6o3u6pHu8pn28onu7o3u/p4C9pXu7o3u6onr49fHOvaH///8+u1w8AAAAInRSTlMAttxxne1iHKbmksH443VDARkJMAb0Ayer7+mfOdzvIB+3E0fTigAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs5LNLLHDwijyYq5orCfL+iIX+A1nJVDVWUmYQfA5SmCJyhqrapmmHSpwIaUg8pLiAaSuKUqPpugZ1P9omipiWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNdsKzj6PoOKAAAAAElFTkSuQmCC"
              alt=""
            />
            组合红包
          </span>
          <em class="yo-ico">&#xe646;</em>
        </li>
        <li>
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABmFBMVEVHcEz/szL/szL/sjP/tDX/tkn/sjL/szL/szP/szL/tTb/tDT/sjL/tTL/tDz/////sjP/szP/uUb/tj3/xjn/szT/tjP/szL/uzP/sjL/szP/szP/sjT/tjf/sjX/sjP/szP/tTL/szL/szX/sjP/v0D/szP/szL/szP/szL/tTX/v0D/szL/szP/szP/tTL/szP/szP/v0D/szL/szL/szT/szL/szT/szP/tDT/sjP/uTr/szL/tTT/tjL/sjP/szP/szL/vDf/szP/tTP/sjP/sjT/tDL/uTX/tDj/vDb/sjP/szP/tTr/szP/tzT/sjL/szP/szP/uTb/tDL/sjP/szP/sjP/szL/sjP/sjL/szT/szP/szL/szP/sjL/tDP/szf/szP/szP/szL/sjP/szL/tjf/szP/sjP/sjP/zDP/sjP/szP/szP/szb/szP//1X/szL/szP/sjP/sjP/szL/sjP/sjL/szP/tDL/uDn/szP/szP/sjL/szP/sjL/uDP/ujv/tDP/sjL/sjT/tDP/sjLb5KWHAAAAh3RSTlMA7v6IUgfL+O2TJljzYBEB/PsLFQlsI8YP6fGvUyo/8tlW6k3iBOPK+qgwCPQyuUwouAzQ5Da8XvdikhaJTzicluAXri3eXXodKRPUCh/DJ9UUpSFmn+HHrH79dqHa8Ld9JbRQnnTADtepugXYm88vhgPWl+y9W/bByHAS6+bbb/kZGpXvhV8/kepJAAACJ0lEQVQYGXXBg2LrAAAF0Nt2SbPa1mxbb7Zt89k272+/pmu6JM3OQUH9Byt13r9tRZG5chp4E4HeO4Yj0Jn7yCnolVGsgk5VmFPQ+/yV2+vQWN/mFxeK1G8xZoeKPcatJhhw7ZCbPuS1b5I7LhjbJTMTyJnIkLu4x0aMjdMB5ASmGxnbgBHfGhmfQcFMnFzzocjiCh12aNgdXFmEjq2S88vQWZ5npQ0as1EuRVAkssToLFT8k2xbgIGFNk76USCEWROAoUANwwIUgxwdwz3GRjmIvC6P5wFyqp7VvUSO++kTH3IeeDxdyHF30IJb7lccQc4LVj7GLQs73JANsVNA3qnET8hy0vEceUInhyATGURB6sdeBZCq3WtBQZA1yGqlJODOPzrqbRK/406DxFYAlzyA2l9Wf+NvqB3wEkAzE1DUSZJkYtYfSZLqoEiwDcANk1CcWWWkVXYGRZI3ANK8hpbJDK1rpgE42A4tkxla7XQAyPAUilCJrJElshAUNmYAXDEFRTVVqqFI8QrABfehKCuVWVkqK4NinxcAzilCy2SGlshzAA1p2qBhMkPDxnQDsobZDA2TGRrNHIZsQGIP1ExmqPVQGkBOH3sroPLwEVQqetmHvH56nbiH08t+FFjI7iQMJLtJC1Sc5fSOJwRoCIlxL8ud0HC9riWPji32ppBfEPyhJrvl+IisHXFBbzUoUkcMrsLQr5aTuHgYtVqjh2L8pOUnVP4DxyCVhLSS0SgAAAAASUVORK5CYII="
              alt=""
            />
            余额
          </span>
          <em class="yo-ico">
            <i>￥0</i>
            &#xe646;</em
          >
        </li>
        <li>
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEVHcEy5zVO5zVHCzFK4zFDE2GK5zFH//4C6zFG4zFG5zFC5y1D//1W811G4y1HMzGa5zFG4zFC4y1G7zFW9zFK5zFG5zlK5y1C4zVG5z1S5y1C5zFHMzGa5y1K5y1C6zFG4zFG8zlO4zFG4y1C4zFC6zFK4zFG6y1G5y1G4zFG4zFG5y1G4zFC8zlG7zFW5zFC5y1C7y1G5zFG4zFK5y1G6zFC5y1C5zFG5zFC5zFG4zFG/1VW5zlG801m50V26zVC5zFG/z1i5zVDD0lq5y1G5y1DI21vG41W4y1C4zFC50VH////CzlW4zlG6zFG9zFC4zFG5zVC4zVK9zlK/1VW5zVK501i5y1G4zFG7zVO5zFG5zVG//4C5y1G5zFO4y1G4zVW4y1G4y1G5y1G6zli5zVG5zFC5y1G6zVK5zFC8z1K4zFK5zFG5zFC5y1G8zlW5zFG+0FPb2225zFC4zlO5zFK4zVC5zFG5zFG4y1C80FG5zFC80lO6y1C4zFG5zFC5zFG4zFC41VW5y1C5zFG4zFC4zFC5zFG4zFG5zFG5zVG/0VK4y1G4zFG4zFG5zFG4y1C4y1G7zVG7zVC5zFG5y1C4y1G50VW4y1G5zlG5y1K6y1O5zFG7zVK4zFG5zFG/32C5zFC6y1K5zFC6zFC6y1K5y1C4y1A6YiA9AAAAp3RSTlMATUIZwg3zAoHg/s8DE4UF8O78HjL6Pt5hOuLQCoDFiHdE/fH4faae9+rNwfU5D3z7T3RB04yZx2mhqRhiFwtcqiB/Ee2oDgny6ywBFS9VI9xmcB8MVx23m0dfdQTsUMok45S2GoSSo2CcNXORyHsq5CsH0lOGidd4vCb0Iln5tYu/Eo+935/EjaSOHLGwkL422SlWrrKtIV5YVEqHOLSzCKVnzG92y+T4Gd0AAAJFSURBVDjLnZVVd9tAEEbHMVMMsQMOMzNTAw0zJ2VmZmZmZsb7N/tgkJTK9TnV03zf3tXszoyORP7nCTSnmYaj4mLx+ThY402A0vGw6rZT0BvQwTo7wPt4qopHKSIi+XZmyqCjZjWXP0DZ4SGRpFH811r2nIEcd2fuCGn7tVyXnxPHREQk5XYRwNE8l4j0HSK4VwO20n48GrvzZ3uqXeHYs49WDXiQPP0b5rFboxvI1QdzadDoXWTrg/0ka3QOm/XBenLUMhVflj6Y5SNVUfMhiuO1tZbQfCT0pJdjckUXzDanxeK0maPaVUl5ukdE3MtV8DnmJ9kBwJ4U2/kFqpbd8h1HxaI1xjkwGYxGgwlHjLQuVjiYlRV+Kgcy20m2iohYk7GbFX+OFflBhmLYMEVebjVhU/wMfkuIJcXIxBANDTgVf4mQWFhQDAvGaGjEovgLWCSIJzH4lTIpZyJx6mlm5BnPE18mlUp5xYtE5Zn8WMk36afp7Fr5R8EfPAH4JU+DUJgucVsYGGD0/tQnl4i7fgfUKtltmeqhuH6Lh0rC9XWOdXGm7AZ3VOWTDTTpc8M+xtR64zZ1x0Xd5AqtsZ05XfAdJVrjAFd1wfe81ho2dR9Uzxhp4xrjHF26oCuNDxrjChciRd+ZvWWT19m8Nazejqz6PteUQkm3iLQVhTtTkG0VmRiEkqFVSS4Vcrk9cAoGG9011S1+7k2WFlHY8/dxpnv9QPBkZLC8QMHLN7onTzntoy02uHXeu31xfwtZR1Tb1miW/gAXS6eS/ovNKQAAAABJRU5ErkJggg=="
              alt=""
            />
            设置
          </span>
          <em class="yo-ico">&#xe646;</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.wrap-profile
  width 100%
  height 100%
  .wrap-login
    height auto
    .login
      height 2rem
      width 100%
      background url(https://assets.maizuo.com/h5/v5/public/app/img/bg.043a928.png)
      padding .4rem 0 0 .2rem
      box-sizing border-box
      img
        width .67rem
        height .67rem
        border-radius 50%
      a
        padding-left .2rem
        font-size .16rem
        color #ffffff
    .order
      display flex
      justify-content space-around
      align-items center
      background #ffffff
      height .8rem
      p
        display flex
        flex-direction column
        align-items center
        img
          width .2rem
          height .2rem
        span
          color #797d82
          margin-top 5px
  .select-card
    width 100%
    background #ffffff
    margin-top 10px
    ul
      width 100%
      padding .1rem
      box-sizing border-box
      li
        display flex
        justify-content space-between
        height .49rem
        align-items center
        box-sizing border-box
        width 100%
        span
          color #191a1b
          font-size .15rem

          img
            width .2rem
            height  .2rem
            margin-right .15rem
</style>
