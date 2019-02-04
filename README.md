# WebAssembly Bar Code Scanner
JavaScript Bar Code scanner for the web using ZXing and WebAssembly.

# Build (requires Emscripten)
```
emconfigure cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE="./zxing-cpp/wrappers/wasm/Toolchain-Emscripten.cmake" -DEMSCRIPTEN_ROOT_PATH="$EMSDK" "./zxing-cpp/wrappers/wasm" -ENABLE_ENCODERS=0
```
