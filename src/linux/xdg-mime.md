# xdg-mime

---

## xdg-open

很多 linux 程序使用 xdg-open 来打开文件，xdg-open 通过文件的 mime 类型来判断应该用什么程序打开。
xdg-mime 可以配置 mime 类型对应的程序，以下为配置文件的位置：

```
~/.config/mimeapps.list
/etc/xdg/mimeapps.list
~/.local/share/applications/mimeapps.list (deprecated)
/usr/share/applications/mimeapps.list or /usr/local/share/applications/mimeapps.list
```

## mimeapps.list

```
[Added Associations]
image/jpeg=bar.desktop;baz.desktop
video/H264=bar.desktop
[Removed Associations]
video/H264=baz.desktop
[Default Applications]
image/jpeg=foo.desktop
```

- 每个程序用 desktop entries 来提供它可以处理的 mime 类型，系统通过这些 desktop entries 生成一份映射文件，存储在 `/usr/share/applications/mimeinfo.cache`。
- mime 类型的枚举存储在 `/usr/share/mime/types`
