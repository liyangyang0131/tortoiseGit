# tortoiseGit
tortoiseGit基本操作

TortoiseGit 提交代码每次需要输入用户名和密码,解决办法
    Right click → TortoiseGit → Settings → Git → Credential. 
    设置为 wincred - this repository only


1.默认是master分支
    pull->commit->push

2.pull时，提示因为冲突导致拉取失败
    场景一 
    user0 有新提交
    user1 没有pull -> 写新代码 -> pull -> 提示有冲突
     
    解决办法一
    -> stash save(把自己的代码隐藏存起来) -> 重新pull -> stash pop(把存起来的隐藏的代码取回来 ) -> 代码文件会显示冲突 -> 右键选择edit conficts，解决后点击编辑页面的 mark as resolved ->  commit&push
     
    解决办法二(尽量少使用，这种方法的优点是在在原编辑器里处理冲突，代码逻辑看得更清楚一些)
    -> stash save(把自己的代码隐藏存起来) -> 重新pull -> stash pop(把存起来的隐藏的代码取回来 ) -> 代码文件会显示冲突 -> 右键选择resolve conflict -> 打开文件解决冲突 -> commit&push
     
     
    场景二
    user0 有新提交
    user1 没有pull -> 写新代码 -> commit&push -> 提示有冲突
     
    解决办法一
    -> pull -> 代码文件会显示冲突 -> 右键选择edit conficts，解决后点击编辑页面的 mark as resolved ->  commit&push

3.远程创建新分支
    Create Branch->Switch/Checkout->在新分支下执行PUSH操作，在对话框中保持远程分支为空白，点击OK，则将在远程创建了新的分支（在PUSH的时候远程服务器发现远程没有该分支，此时会自动创建一个和本地分支名称一样的分支，并将本地分支的内容上传到该分支）。

4.其他成员切换该新分支：
    首先进行pull操作， 然后进行切换分支

5.分区合并

    进行分支合并之前我们需要明确哪个分支将要合并到哪个分支，首先通过“Switch/CheckOut”切换到主干分支（如develop分支）,然后通过“Merge”继进行合并操作，在对话框中选择需要合并的分支。
    分支合并成功后，我们即可以通过Commit与PUSH操作将合并上传到中心服务器。

6.

