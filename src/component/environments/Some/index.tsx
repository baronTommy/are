import React, { FC } from "react";
import { Aaa } from "../../atoms/Foo";

type SomeProps = {
  htmlUrl: string;
  id?: string | number
};

console.log(
  "ダイナミックインポートされるので 必要になるまで 読み込まれないので ファーストビューはいいはず 🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜"
);

export const Some: FC<SomeProps> = ({ htmlUrl, id }) => (
  <>
    <div>
      <a href={htmlUrl}> とみーの github </a>
    </div>

    <div>
      リクエストパラメタ->{id}
    </div>

    <div>
      <Aaa />
    </div>

  </>
);