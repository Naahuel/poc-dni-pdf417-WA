#!/bin/sh
SOURCE_BASEDIR=./zxing-cpp/wrappers/wasm

emconfigure cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release -ENABLE_ENCODERS=0 -DCMAKE_TOOLCHAIN_FILE="$SOURCE_BASEDIR/Toolchain-Emscripten.cmake" -DEMSCRIPTEN_ROOT_PATH="$EMSCRIPTEN" "$SOURCE_BASEDIR"
emmake make
