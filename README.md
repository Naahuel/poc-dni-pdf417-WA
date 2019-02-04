# Lector de código de barras de DNI Argentino
Este demo intenta leer el código de barras 2D en formato PDF417 del DNI argentino desde un stream de la webcam o cámara de celular.

Está basado en un [port de CPP](https://github.com/nu-book/zxing-cpp) de [ZXing](http://github.com/zxing/zxing)

El código debe estar bien enfocado y horizontal, lo más paralelo a la imagen como sea posible.

[Ver demo](https://poc-dni-pdf417-wa.now.sh)

Este lector usa WebAssembly. Ver instrucciones para compilar en el repo de [ZXing C++](https://github.com/nu-book/zxing-cpp)

[También puede ver la versión con JS puro.](https://github.com/Naahuel/poc-dni-pdf417)

# Build (requiere Emscripten)
```
emconfigure cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="./zxing-cpp/wrappers/wasm/Toolchain-Emscripten.cmake" -DEMSCRIPTEN_ROOT_PATH="$EMSDK" "./zxing-cpp/wrappers/wasm" -ENABLE_ENCODERS=0
```
