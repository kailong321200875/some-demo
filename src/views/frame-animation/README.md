<h1>CSS 帧动画</h1>

兼容性好，方便使用。

目前只支持从左到右，后续考虑下是否可以支持从左到右，从上到下的切换

# 封装帧动画方法

## less 版本

```less
/**
 * @param {String} @img: 图片路径
 * @param {Length} @w: 每一帧宽度
 * @param {Length} @h: 每一帧高度
 * @param {Number} @frame: 总帧数
 * @param {Time} @t: 动画总时长
 */
.frame-run(@img, @w, @h, @frame, @t: 2s) {
  width: @w;
  height: @h;
  background-image: url(@img);
  background-repeat: no-repeat;
  background-size: 100% * @frame auto;
  animation: frame-animation @t steps(@frame) both infinite;

  @keyframes frame-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% + (100% / (@frame - 1)) 0;
    }
  }
}

```

## less 版本使用

```less
.frame-animation {
  .frame-run('~@/assets/imgs/waiting-nohash.png', 127px, 200px, 45);
}

```

## scss 版本

```scss
/**
 * @mixins
 * @param {String} $img: 图片路径
 * @param {Length} $w: 每一帧宽度
 * @param {Length} $h: 每一帧高度
 * @param {Number} $frame: 总帧数
 * @param {Time} $t: 动画总时长
 */
@mixin frame-run($img, $w, $h, $frame, $t: 2s) {
  width: $w;
  height: $h;
  background-image: url(#{$img});
  background-repeat: no-repeat;
  background-size: 100% * $frame auto;
  animation: frame-animation #{$t} steps($frame) both infinite;

  @keyframes frame-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: #{100% + calc(100% / ($frame - 1))} 0;
    }
  }
}

```

## scss 版本使用

```scss
.frame-animation {
  @include frame-run('~@/assets/imgs/waiting-nohash.png', 127px, 200px, 45);
}

```
