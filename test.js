$(function(){
  $('#send_buttom').click(function(){
    $('.outer').html(
      `
      <div class="modal">
      <div class="modal-header">
        エラーレベル
      </div>
      <div class="modal-body">
        <div class="modal-body__icon">
          <p><i class="fas fa-exclamation-triangle icon_size"></i></p>
        </div>
        <div class="modal-body__content">
          メッセージ内容メッセージ内容メッセージ内容メッセージ内容
          メッセージ内容メッセージ内容メッセージ内容メッセージ内容
          メッセージ内容メッセージ内容メッセージ内容メッセージ内容
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="modal-footer__close">閉じる</button>
      </div>
    </div>
      `
    )
  });
});
